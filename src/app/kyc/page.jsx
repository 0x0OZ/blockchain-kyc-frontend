import { KycSteps } from "../../components/KycSteps"
import Header  from "../../components/Header"
import  LeftSide  from "../../components/LeftSide"

export default function KycProcess() {
    function MainContent() {
      return (
        <div className="text-indigo-300 flex antialiased flex-col items-center leading-relaxed w-full h-screen p-20 pt-6 ">
          <KycSteps />
        </div>
      )
    }
    return (
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-row flex-1 ">
          <LeftSide />
          <MainContent />
        </div>
      </div>
    )
  }   
