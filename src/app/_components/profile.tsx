import Avatar from "./avatar"
import { AUTHOR_NAME, AUTHOR_PICTURE } from "@/lib/constants"

const Profile = () => {
   return (
    <div className="mt-8 flex flex-col gap-8 justify-between items-center">
      <Avatar name={AUTHOR_NAME} picture={AUTHOR_PICTURE} />
      <p className="mt-2">
        中田なたいと申します。
        <br />
        普段は
        <a href="https://mk.shrimpia.network" target="_blank">
          シュリンピア帝国
        </a>
        で活動しているプログラマー志望のカードゲーマーです。
      </p>
    </div>
   )
}

export default Profile
