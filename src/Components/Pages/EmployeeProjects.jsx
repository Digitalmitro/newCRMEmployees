import React, { Profiler } from "react";
import { FaListUl } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";


const EmployeeProjects = () => {
  return (
    <>
      <div className="employee-project-container container py-3" >
       

        <ul class="nav nav-pills mb-3 my-5 nav-underline" id="pills-tab1" role="tablist">
          <li class="nav-item " role="presentation">
            <button class="nav-link active nav-underline " id="pills-activeproject" data-bs-toggle="pill" data-bs-target="#pills-activeproject-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Active Projects</button>
            {/* <hr className="underlinehover" /> */}
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-projecttemplate" data-bs-toggle="pill" data-bs-target="#pills-projecttemplate-home" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Project Templates</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-projectgroup" data-bs-toggle="pill" data-bs-target="#pills-projectgroup-home" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Project Groups</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-publicproject" data-bs-toggle="pill" data-bs-target="#pills-publicproject-home" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Public Projects</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-recyclebin" data-bs-toggle="pill" data-bs-target="#pills-recyclebin-home" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Recycle Bin</button>
          </li>
        </ul>

        <div class="tab-content all-projects" id="pills-tabContent">
          <div class="tab-pane fade show active table-responsive" id="pills-activeproject-home" role="tabpanel" aria-labelledby="pills-activeproject-home" tabindex="0" >
            <div className="project-title my-4">
              <div className="allproject">
                <h6>All Projects</h6>
              </div>
              <div className="list">
                <span><FaListUl style={{ marginRight: "10px" }} />List <button style={{ border: "1px solid #FF560E", marginLeft: "10px", background: "#fff", color: "#FF560E", padding: "2px 5px", borderRadius: "10px", fontSize: "0.8rem" }}>Automation</button></span>
              </div>
              <div className="sort"  >

                <span><FaFilter style={{ color: "FF560E", fontSize: "0.8rem" }} /> </span>
                <span><BsThreeDots style={{ color: "FF560E", fontSize: "0.8rem" }} /> </span>
                {/* <div><FaFilter /></div>
                <div><BsThreeDots /></div> */}
              </div>
            </div>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Project Name</th>
                  <th scope="col">%</th>
                  <th scope="col"><span style={{ marginRight: "2px" }} >
                    <svg width="12" height="12" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.29184 3.125C7.29184 3.33496 7.20843 3.53633 7.05997 3.68479C6.9115 3.83326 6.71014 3.91667 6.50017 3.91667V5.5C7.13006 5.5 7.73415 5.24978 8.17955 4.80438C8.62495 4.35898 8.87517 3.75489 8.87517 3.125H7.29184ZM6.50017 3.91667C6.29021 3.91667 6.08885 3.83326 5.94038 3.68479C5.79192 3.53633 5.70851 3.33496 5.70851 3.125H4.12517C4.12517 3.75489 4.3754 4.35898 4.8208 4.80438C5.26619 5.24978 5.87029 5.5 6.50017 5.5V3.91667ZM5.70851 3.125C5.70851 2.91504 5.79192 2.71367 5.94038 2.56521C6.08885 2.41674 6.29021 2.33333 6.50017 2.33333V0.75C5.87029 0.75 5.26619 1.00022 4.8208 1.44562C4.3754 1.89102 4.12517 2.49511 4.12517 3.125H5.70851ZM6.50017 2.33333C6.71014 2.33333 6.9115 2.41674 7.05997 2.56521C7.20843 2.71367 7.29184 2.91504 7.29184 3.125H8.87517C8.87517 2.49511 8.62495 1.89102 8.17955 1.44562C7.73415 1.00022 7.13006 0.75 6.50017 0.75V2.33333ZM1.08992 10.136L0.330716 9.91037L0.208008 10.3244L0.489049 10.6514L1.08992 10.136ZM11.9104 10.136L12.5121 10.6514L12.7923 10.3244L12.6696 9.91037L11.9104 10.136ZM4.12517 8.66667H8.87517V7.08333H4.12517V8.66667ZM4.12517 7.08333C3.27266 7.08332 2.44289 7.35844 1.75926 7.86778C1.07562 8.37712 0.574609 9.09349 0.330716 9.91037L1.84834 10.3616C1.995 9.87176 2.29575 9.44225 2.70593 9.1369C3.1161 8.83156 3.61382 8.66665 4.12517 8.66667V7.08333ZM6.50017 11.8333C5.58619 11.8344 4.68286 11.6371 3.85253 11.255C3.02221 10.873 2.28466 10.3154 1.6908 9.62063L0.489049 10.6514C1.23154 11.5194 2.15344 12.2162 3.19119 12.6936C4.22895 13.171 5.35788 13.4177 6.50017 13.4167V11.8333ZM8.87517 8.66667C9.94947 8.66667 10.8591 9.38075 11.152 10.3624L12.6696 9.91037C12.4258 9.09362 11.9241 8.37735 11.2406 7.86802C10.5571 7.35869 9.72756 7.08349 8.87517 7.08333V8.66667ZM11.3096 9.62063C10.7157 10.3154 9.97814 10.873 9.14782 11.255C8.31749 11.6371 7.41416 11.8344 6.50017 11.8333V13.4167C7.64247 13.4177 8.7714 13.171 9.80916 12.6936C10.8469 12.2162 11.7696 11.5194 12.5121 10.6514L11.3096 9.62063Z" fill="#888686" fill-opacity="0.67" />
                    </svg>
                  </span>Owner</th>

                  <th scope="col"><span style={{ marginRight: "2px" }}><svg width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.3538 1.64712C11.9282 1.22241 11.3515 0.983887 10.7503 0.983887C10.1491 0.983887 9.57237 1.22241 9.1468 1.64712L4.8968 5.89712C4.84189 5.95186 4.80047 6.01862 4.7758 6.09212L3.5258 9.84212C3.49635 9.9302 3.49201 10.0247 3.51327 10.1151C3.53453 10.2055 3.58054 10.2882 3.64616 10.354C3.71177 10.4197 3.7944 10.4658 3.88476 10.4872C3.97513 10.5086 4.06968 10.5044 4.1578 10.4751L7.9078 9.22512C7.98166 9.20059 8.04877 9.15916 8.1038 9.10412L12.3538 4.85412C12.7785 4.42855 13.017 3.85187 13.017 3.25062C13.017 2.64938 12.7785 2.0727 12.3538 1.64712ZM10.9868 7.63512C10.9955 7.75512 10.9998 7.87679 10.9998 8.00012C10.9997 9.00458 10.6971 9.98573 10.1314 10.8157C9.56573 11.6457 8.76316 12.2861 7.82828 12.6535C6.8934 13.0208 5.86956 13.098 4.89016 12.8751C3.91075 12.6522 3.02119 12.1394 2.33737 11.4037C1.65356 10.668 1.20719 9.7433 1.05643 8.75023C0.905677 7.75715 1.05752 6.74169 1.49217 5.83615C1.92682 4.93061 2.62414 4.17697 3.49326 3.67343C4.36239 3.1699 5.36302 2.9398 6.3648 3.01312L7.2488 2.13012C5.98313 1.86102 4.66439 2.00829 3.48926 2.54997C2.31414 3.09164 1.34562 3.9987 0.728165 5.13583C0.110709 6.27296 -0.122591 7.57924 0.0630632 8.85981C0.248718 10.1404 0.843378 11.3266 1.75834 12.2416C2.67331 13.1565 3.85955 13.7512 5.14012 13.9369C6.42068 14.1225 7.72696 13.8892 8.86409 13.2718C10.0012 12.6543 10.9083 11.6858 11.45 10.5107C11.9916 9.33554 12.1389 8.01679 11.8698 6.75112L10.9868 7.63512Z" fill="#959595" />
                  </svg>
                  </span>Status</th>
                  <th scope="col"><span style={{ marginRight: "2px" }}><svg width="10" height="10" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0H2C0.9 0 0.0100002 0.9 0.0100002 2L0 18C0 19.1 0.89 20 1.99 20H14C15.1 20 16 19.1 16 18V6L10 0ZM14 18H2V2H9V7H14V18ZM4.82 11.05L3.4 12.46L6.94 16L12.6 10.34L11.19 8.93L6.95 13.17L4.82 11.05Z" fill="#A4A4A4" />
                  </svg>
                  </span  >Tasks</th>

                  <th scope="col"><span style={{ marginRight: "5px" }}><svg width="10" height="10" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 2H15V1C15 0.734784 14.8946 0.48043 14.7071 0.292893C14.5196 0.105357 14.2652 0 14 0C13.7348 0 13.4804 0.105357 13.2929 0.292893C13.1054 0.48043 13 0.734784 13 1V2H7V1C7 0.734784 6.89464 0.48043 6.70711 0.292893C6.51957 0.105357 6.26522 0 6 0C5.73478 0 5.48043 0.105357 5.29289 0.292893C5.10536 0.48043 5 0.734784 5 1V2H3C2.20435 2 1.44129 2.31607 0.87868 2.87868C0.316071 3.44129 0 4.20435 0 5V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V5C20 4.20435 19.6839 3.44129 19.1213 2.87868C18.5587 2.31607 17.7956 2 17 2ZM18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V10H18V17ZM18 8H2V5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4H5V5C5 5.26522 5.10536 5.51957 5.29289 5.70711C5.48043 5.89464 5.73478 6 6 6C6.26522 6 6.51957 5.89464 6.70711 5.70711C6.89464 5.51957 7 5.26522 7 5V4H13V5C13 5.26522 13.1054 5.51957 13.2929 5.70711C13.4804 5.89464 13.7348 6 14 6C14.2652 6 14.5196 5.89464 14.7071 5.70711C14.8946 5.51957 15 5.26522 15 5V4H17C17.2652 4 17.5196 4.10536 17.7071 4.29289C17.8946 4.48043 18 4.73478 18 5V8Z" fill="#959595" />
                  </svg>
                  </span>Start Date <span style={{ marginLeft: "2px" }}><svg width="12" height="12" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.51416 7.15445H10.4858L5.49998 0.545898L0.51416 7.15445Z" fill="#C8C7C7" />
                    <path d="M10.4858 8.84555L0.514191 8.84555L5.50002 15.4541L10.4858 8.84555Z" fill="#C8C7C7" />
                  </svg>
                    </span></th>


                  <th scope="col"><span style={{ marginRight: "5px" }}><svg width="10" height="10" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 2H15V1C15 0.734784 14.8946 0.48043 14.7071 0.292893C14.5196 0.105357 14.2652 0 14 0C13.7348 0 13.4804 0.105357 13.2929 0.292893C13.1054 0.48043 13 0.734784 13 1V2H7V1C7 0.734784 6.89464 0.48043 6.70711 0.292893C6.51957 0.105357 6.26522 0 6 0C5.73478 0 5.48043 0.105357 5.29289 0.292893C5.10536 0.48043 5 0.734784 5 1V2H3C2.20435 2 1.44129 2.31607 0.87868 2.87868C0.316071 3.44129 0 4.20435 0 5V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V5C20 4.20435 19.6839 3.44129 19.1213 2.87868C18.5587 2.31607 17.7956 2 17 2ZM18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V10H18V17ZM18 8H2V5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4H5V5C5 5.26522 5.10536 5.51957 5.29289 5.70711C5.48043 5.89464 5.73478 6 6 6C6.26522 6 6.51957 5.89464 6.70711 5.70711C6.89464 5.51957 7 5.26522 7 5V4H13V5C13 5.26522 13.1054 5.51957 13.2929 5.70711C13.4804 5.89464 13.7348 6 14 6C14.2652 6 14.5196 5.89464 14.7071 5.70711C14.8946 5.51957 15 5.26522 15 5V4H17C17.2652 4 17.5196 4.10536 17.7071 4.29289C17.8946 4.48043 18 4.73478 18 5V8Z" fill="#959595" />
                  </svg>
                  </span>End Date <span style={{ marginLeft: "2px" }}><svg width="12" height="12" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.51416 7.15445H10.4858L5.49998 0.545898L0.51416 7.15445Z" fill="#C8C7C7" />
                    <path d="M10.4858 8.84555L0.514191 8.84555L5.50002 15.4541L10.4858 8.84555Z" fill="#C8C7C7" />
                  </svg>
                    </span></th>


                  <th scope="col"><span style={{ marginRight: "5px" }}><svg width="10" height="10" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 2H15V1C15 0.734784 14.8946 0.48043 14.7071 0.292893C14.5196 0.105357 14.2652 0 14 0C13.7348 0 13.4804 0.105357 13.2929 0.292893C13.1054 0.48043 13 0.734784 13 1V2H7V1C7 0.734784 6.89464 0.48043 6.70711 0.292893C6.51957 0.105357 6.26522 0 6 0C5.73478 0 5.48043 0.105357 5.29289 0.292893C5.10536 0.48043 5 0.734784 5 1V2H3C2.20435 2 1.44129 2.31607 0.87868 2.87868C0.316071 3.44129 0 4.20435 0 5V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V5C20 4.20435 19.6839 3.44129 19.1213 2.87868C18.5587 2.31607 17.7956 2 17 2ZM18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V10H18V17ZM18 8H2V5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4H5V5C5 5.26522 5.10536 5.51957 5.29289 5.70711C5.48043 5.89464 5.73478 6 6 6C6.26522 6 6.51957 5.89464 6.70711 5.70711C6.89464 5.51957 7 5.26522 7 5V4H13V5C13 5.26522 13.1054 5.51957 13.2929 5.70711C13.4804 5.89464 13.7348 6 14 6C14.2652 6 14.5196 5.89464 14.7071 5.70711C14.8946 5.51957 15 5.26522 15 5V4H17C17.2652 4 17.5196 4.10536 17.7071 4.29289C17.8946 4.48043 18 4.73478 18 5V8Z" fill="#959595" />
                  </svg>
                  </span>Completion Date <span style={{ marginLeft: "2px" }}><svg width="12" height="12" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.51416 7.15445H10.4858L5.49998 0.545898L0.51416 7.15445Z" fill="#C8C7C7" />
                    <path d="M10.4858 8.84555L0.514191 8.84555L5.50002 15.4541L10.4858 8.84555Z" fill="#C8C7C7" />
                  </svg>
                    </span></th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">PP-1</th>
                  <td><div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h5 style={{ fontSize: "0.8rem", marginRight: "20px" }}>CRM Content</h5>
                    <button style={{ border: "1px solid #FF560E", background: "#fff", color: "#FF560E", padding: "2px 5px", borderRadius: "10px" }}>Access Project</button>
                  </div></td>
                  <td>0%</td>
                  <td>@mdo</td>
                  <td>


                    <select style={{ border: "none", outline: "none" }} name="" id="">
                      <option value="value1">Active</option>
                      <option value="value2">2</option>
                      <option value="value3">3</option>
                    </select>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>


                </tr>
              </tbody>
            </table>

          </div>


          <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
            ...
          </div>
          <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">...</div>
          <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">...</div>
        </div>
      </div>
    </>
  );
};

export default EmployeeProjects;
