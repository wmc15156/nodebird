import NicknameEditForm from "../../components/NicknameEditForm";
import FollowList from "../../components/FollowList/FollowList";
import {useSelector} from "react-redux";

const Profile = () => {
    const { me } = useSelector((state) => state?.user);
    return (
        <div>
            <NicknameEditForm />
            <FollowList header="팔로잉 목록" data={me.Followings} />
            <FollowList header="팔로워 목록" data={me.Followers} />
        </div>
    )
}

export default Profile;
