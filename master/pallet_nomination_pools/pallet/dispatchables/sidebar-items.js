window.SIDEBAR_ITEMS = {"fn":[["bond_extra","Bond `extra` more funds from `origin` into the pool to which they already belong."],["bond_extra_other","`origin` bonds funds from `extra` for some pool member `member` into their respective pools."],["chill","Chill on behalf of the pool."],["claim_commission","Claim pending commission."],["claim_payout","A bonded member can use this to claim their payout based on the rewards that the pool has accumulated since their last claimed payout (OR since joining if this is their first time claiming rewards). The payout will be transferred to the member’s account."],["claim_payout_other","`origin` can claim payouts on some pool member `other`’s behalf."],["create","Create a new delegation pool."],["create_with_pool_id","Create a new delegation pool with a previously used pool id"],["join","Stake funds with a pool. The amount to bond is transferred from the member to the pools account and immediately increases the pools bond."],["nominate","Nominate on behalf of the pool."],["pool_withdraw_unbonded","Call `withdraw_unbonded` for the pools account. This call can be made by any account."],["set_claim_permission","Allows a pool member to set a claim permission to allow or disallow permissionless bonding and withdrawing."],["set_commission","Set the commission of a pool. Both a commission percentage and a commission payee must be provided in the `current` tuple. Where a `current` of `None` is provided, any current commission will be removed."],["set_commission_change_rate","Set the commission change rate for a pool."],["set_commission_max","Set the maximum commission of a pool."],["set_configs","Update configurations for the nomination pools. The origin for this call must be Root."],["set_metadata","Set a new metadata for the pool."],["set_state","Set a new state for the pool."],["unbond","Unbond up to `unbonding_points` of the `member_account`’s funds from the pool. It implicitly collects the rewards one last time, since not doing so would mean some rewards would be forfeited."],["update_roles","Update the roles of the pool."],["withdraw_unbonded","Withdraw unbonded funds from `member_account`. If no bonded funds can be unbonded, an error is returned."]]};