window.SIDEBAR_ITEMS = {"struct":[["BondedPools","Storage for bonded pools."],["ClaimPermissions","Map from a pool member account to their opted claim permission."],["GlobalMaxCommission","The maximum commission that can be charged by a pool. Used on commission payouts to bound pool commissions that are > `GlobalMaxCommission`, necessary if a future `GlobalMaxCommission` is lower than some current pool commissions."],["LastPoolId","Ever increasing number of all pools created so far."],["MaxPoolMembers","Maximum number of members that can exist in the system. If `None`, then the count members are not bound on a system wide basis."],["MaxPoolMembersPerPool","Maximum number of members that may belong to pool. If `None`, then the count of members is not bound on a per pool basis."],["MaxPools","Maximum number of nomination pools that can exist. If `None`, then an unbounded number of pools can exist."],["Metadata","Metadata for the pool."],["MinCreateBond","Minimum bond required to create a pool."],["MinJoinBond","Minimum amount to bond to join a pool."],["PoolMembers","Active members."],["ReversePoolIdLookup","A reverse lookup from the pool’s account id to its id."],["RewardPools","Reward pools. This is where there rewards for each pool accumulate. When a members payout is claimed, the balance comes out fo the reward pool. Keyed by the bonded pools account."],["SubPoolsStorage","Groups of unbonding pools. Each group of unbonding pools belongs to a bonded pool, hence the name sub-pools. Keyed by the bonded pools account."]]};