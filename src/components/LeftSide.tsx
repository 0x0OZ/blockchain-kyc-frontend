import KycList  from "../components/KycList";
import {IsUserKYCVerified} from "../components/IsUserKYCVerified";
import {GetUsername} from "../components/GetUsername";
export default function LeftSide() {
    return (
        <div className="SideBar">
            <h1 className="font-bold">KYC Authentications</h1>
            <KycList />
            <hr className="p-6" />
            <IsUserKYCVerified />
            <GetUsername />
        </div>
    )
}
