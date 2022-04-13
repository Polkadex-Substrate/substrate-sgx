// This file is part of Substrate.

// Copyright (C) 2019-2022 Parity Technologies (UK) Ltd.
// SPDX-License-Identifier: Apache-2.0

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// 	http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

use std::{borrow::Cow, process::Command};

/// Generate the `cargo:` key output
pub fn generate_cargo_keys() {
	let commit = if let Ok(hash) = std::env::var("SUBSTRATE_CLI_GIT_COMMIT_HASH") {
		Cow::from(hash.trim().to_owned())
	} else {
		match Command::new("git").args(&["rev-parse", "--short", "HEAD"]).output() {
			Ok(o) if o.status.success() => {
				let sha = String::from_utf8_lossy(&o.stdout).trim().to_owned();
				Cow::from(sha)
			},
			Ok(o) => {
				println!("cargo:warning=Git command failed with status: {}", o.status);
				Cow::from("unknown")
			},
			Err(err) => {
				println!("cargo:warning=Failed to execute git command: {}", err);
				Cow::from("unknown")
			},
		}
	};

	println!("cargo:rustc-env=SUBSTRATE_CLI_IMPL_VERSION={}", get_version(&commit))
}

fn get_version(impl_commit: &str) -> String {
	let commit_dash = if impl_commit.is_empty() { "" } else { "-" };

	format!(
		"{}{}{}",
		std::env::var("CARGO_PKG_VERSION").unwrap_or_default(),
		commit_dash,
		impl_commit
	)
}
