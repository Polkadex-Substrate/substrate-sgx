// This file is part of Substrate.

// Copyright (C) Parity Technologies (UK) Ltd.
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

//! Contains the [`Task`] trait, which defines a general-purpose way for defining and executing
//! service work, and supporting types.

use codec::FullCodec;
use sp_runtime::DispatchError;
use sp_std::iter::Iterator;

/// A general-purpose trait which defines a type of service work (i.e., work to performed by an
/// off-chain worker) including methods for enumerating, validating, indexing, and running
/// tasks of this type.
pub trait Task: Sized + FullCodec {
	type Enumeration: Iterator<Item = Self>;

	/// Inspects the pallet's state and enumerates tasks of this type.
	fn enumerate() -> Self::Enumeration;

	/// Checks if a particular instance of this `Task` variant is a valid piece of work.
	fn is_valid(&self) -> bool;

	/// Returns the `task_index` (analogous to `call_index`, but for tasks) of this `Task`
	/// variant.
	const fn task_index(&self) -> usize;

	/// Performs the work for this particular `Task` variant.
	fn run(&self) -> Result<(), DispatchError>;
}
