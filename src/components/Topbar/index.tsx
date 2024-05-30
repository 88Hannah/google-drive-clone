import Button from "@/components/common/Button"
import { signIn, signOut } from "next-auth/react"
import Image from "next/image"
import { useFetchSession } from "@/hooks/useSession"
import styles from "./Topbar.module.scss"

export default function HomeComponent() {
    const { session } = useFetchSession()
    return (
        <div className={styles.authBtn}>
            {session ? 
            <div className="flex flex-col items-center">
              <Image
                onClick={() => signOut({ callbackUrl: '/', redirect:true })}
                className={styles.profileImg}
                src={session?.user.image ?? ""}
                width={100}
                height={100}
                alt="Profile image"
              />
              {/* It feels like it would be good to have a more obvious way to sign out ... */}
              {/* <Button
                onClick={() => signOut()} 
                btnClass="btn-secondary" 
                btnText="Sign out"
              /> */}
            </div>
            : <Button
                onClick={() => signIn()} 
                btnClass="btn-secondary" 
                btnText="Sign in"
              />
          }
        </div>
    )
}