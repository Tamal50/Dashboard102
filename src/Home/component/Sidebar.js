import { SidebarContainer, SidebarDiv} from './DashboardStyle';
import SubMenu from './Submenu';
import {SidebarData} from './SidebarData';

const Sidebar = () => {
  
    return (
      <SidebarContainer>
        <SidebarDiv>
          {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
        </SidebarDiv>
      </SidebarContainer>
    );
};

export default Sidebar;