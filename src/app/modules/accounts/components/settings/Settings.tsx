import {SignInMethod} from './cards/SignInMethod'
import {ConnectedAccounts} from './cards/ConnectedAccounts'
import {EmailPreferences} from './cards/EmailPreferences'
import {Notifications} from './cards/Notifications'
import {DeactivateAccount} from './cards/DeactivateAccount'
import { SftpCon } from './cards/SftpConDetails'
import { Dbcon } from './cards/DbConDetails'
import { FileCollectionCreate } from './cards/FileCollectionCreate'


export function Settings() {
  return (
    <>
      {/* <ProfileDetails /> */}
      <SftpCon />
      <Dbcon></Dbcon>
      <FileCollectionCreate/>
      <SignInMethod />
      <ConnectedAccounts />
      <EmailPreferences />
      <Notifications />
      <DeactivateAccount />
      
    </>
  )
}
