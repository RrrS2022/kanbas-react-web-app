import ModuleList from "../Modules/List";
import CourseStatus from "./Status";


function Home() {
    return (
        <div style={{ display: "flex" }}>
          <div className="flex-column flex-fill" style={{ flex: 1, marginRight: "20px" }}>
            <ModuleList />
          </div>
          <div className="flex-column flex-grow-0 me-2 d-none d-lg-block" style={{ width: "250px" }}>
            <CourseStatus />
          </div>
        </div>
      );
    
}
export default Home;