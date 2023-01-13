window.SIDEBAR_ITEMS = {"constant":[["BEEFY_ENGINE_ID","The `ConsensusEngineId` of BEEFY."],["GENESIS_AUTHORITY_SET_ID","Authority set id starts with zero at BEEFY pallet genesis."],["KEY_TYPE","Key type for BEEFY module."]],"enum":[["ConsensusLog","A consensus log item for BEEFY."],["VersionedFinalityProof","A [SignedCommitment] with a version number."]],"mod":[["crypto","BEEFY cryptographic types"],["known_payloads","Registry of all known [`BeefyPayloadId`]."],["mmr","BEEFY + MMR utilties."],["witness","Primitives for light, 2-phase interactive verification protocol."]],"struct":[["Commitment","A commitment signed by GRANDPA validators as part of BEEFY protocol."],["Payload","A BEEFY payload type allowing for future extensibility of adding additional kinds of payloads."],["SignedCommitment","A commitment with matching GRANDPA validators’ signatures."],["ValidatorSet","A set of BEEFY authorities, a.k.a. validators."],["VoteMessage","BEEFY vote message."]],"trait":[["BeefyApi","API necessary for BEEFY voters."],["BeefyAuthorityId","Trait representing BEEFY authority id, including custom signature verification."],["OnNewValidatorSet","New BEEFY validator set notification hook."],["PayloadProvider","Trait for custom BEEFY payload providers."]],"type":[["AuthorityIndex","The index of an authority."],["BeefyPayloadId","Id of different payloads in the [`crate::Commitment`] data."],["MmrRootHash","The type used to represent an MMR root hash."],["ValidatorSetId","A typedef for validator set id."]]};