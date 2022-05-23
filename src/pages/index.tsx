import { useState, useEffect } from 'react';

import { viewLockupAccount, AccountLockup } from 'near-lockup-helper';

import LockupChart from '../components/LockupChart';

function HomePage() {
  const [lockupInfo, setLockupInfo] = useState<AccountLockup>();

  useEffect(() => {
    viewLockupAccount("84146973a9c419dc97a4a46641b5be70ee7f822e.lockup.near").then(setLockupInfo)
  }, [])

  if (!lockupInfo) {
    return <div>Loading...</div>
  }

  return <>
    <dl>
      <dt>Lockup Account ID:</dt>
      <dd>{lockupInfo.lockupAccountId}</dd>
      <dt>Block #</dt>
      <dd>{lockupInfo.calculatedAtBlockHeight}</dd>
      <dt>Lockup Release Start Date</dt>
      <dd>{lockupInfo.lockupReleaseStartDate.toDateString()}</dd>
      <dt>Liquid Tokens Amount</dt>
      <dd>{lockupInfo.liquidAmount.toString()}</dd>
      <dt>Locked Tokens Amount</dt>
      <dd>{lockupInfo.lockedAmount.toString()}</dd>
      <dt>Total Tokens Amount</dt>
      <dd>{lockupInfo.totalAmount.toString()}</dd>
      <dt>Initial Lockup Amount</dt>
      <dd>{lockupInfo.lockupState.lockupAmount.toString()}</dd>
      <dt>Lockup Duration</dt>
      <dd>{lockupInfo.lockupState.lockupDuration.toString()}</dd>
      <dt>Lockup Timestamp</dt>
      <dd>{lockupInfo.lockupState.lockupTimestamp.toString()}</dd>
      <dt>Lockup Release Duration</dt>
      <dd>{lockupInfo.lockupState.releaseDuration.toString()}</dd>
      <dt>Lockup Terminated Tokens</dt>
      <dd>{lockupInfo.lockupState.terminationWithdrawnTokens.toString()}</dd>
      <dt>Vesting Start Timestamp</dt>
      <dd>{lockupInfo.lockupState.vestingInformation?.start?.toString()}</dd>
      <dt>Vesting Cliff Timestamp</dt>
      <dd>{lockupInfo.lockupState.vestingInformation?.cliff?.toString()}</dd>
      <dt>Vesting End Timestamp</dt>
      <dd>{lockupInfo.lockupState.vestingInformation?.end?.toString()}</dd>
      <dt>Vesting Remaining Tokens</dt>
      <dd>{lockupInfo.lockupState.vestingInformation?.unvestedAmount?.toString()}</dd>
    </dl>
    <LockupChart lockupInfo={lockupInfo} />
  </>
}

export default HomePage
