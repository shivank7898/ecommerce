import styles from "./accountPage.module.css";

import Breadcrumb from "../../components/breadcrumb/Breadcumb";
import AccountForm from "./AccountForm";
import SideBarSec from "./SideBarSec";
import { auth } from "../../firebase";
const AccountPage = () => {
  return (
    <div className={styles.account_main}>
      <div className={styles.breadcrumb_account}>
        <Breadcrumb />
        <div className={styles.account_name}>
          {auth.currentUser && (
            <>
              Welcome! <span>{auth.currentUser?.displayName}</span>
            </>
          )}
        </div>
      </div>
      <div className={styles.account_child}>
        <div className={styles.account_sidebar}>
          <div className={styles.sidebarContainer}>
            <SideBarSec
              title="Manage My Account"
              items={[
                { label: "My Profile", isActive: true },
                { label: "Address Book", isActive: false },
                { label: "My Payment Options", isActive: false },
              ]}
            />

            <SideBarSec
              title="My Orders"
              items={[
                { label: "My Returns", isActive: false },
                { label: "My Cancellations", isActive: false },
              ]}
            />

            <SideBarSec
              title="My WishList"
              items={[{ label: "", isActive: false }]}
            />
          </div>
        </div>
        <div className={styles.account_form}>
          <AccountForm />
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
