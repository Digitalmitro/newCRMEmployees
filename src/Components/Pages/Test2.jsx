 
const [modalOpened, setModalOpened] = useState(false);


const [docss, setdocss] = useState([]);

const [docsDatas, setDocsDatas] = useState("");
const [uploadedDocs, setUploadedDocs] = useState();


const showModals = () => {
  setModalOpened(true);
};
const handleOk = () => {
  setModalOpened(false);
};
const handleCancel = () => {
  setModalOpened(false);
};


const handleSubmit = async () => {
  const formData = new FormData();
  docsDatas.trim() !== "" && formData.append("docsName", docsDatas);
  if (docss) {
    formData.append("docs", docss);
  }
  console.log("docs", docsDatas, docss);
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_API}/docs`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("response", response); // Log the response from the server
    message.success("docs uploaded successfully");
  } catch (err) {
    console.log(err);
  }
};

const getDocsData = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_API}/docs`);
    console.log("res", res.data);
    setUploadedDocs(res.data)
  } catch (err) {
    console.log(err);
  }
};






<Modal
      title=""
      open={modalOpened}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <div className="added-task">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Task
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Doc
            </button>
          </li>
        </ul>

        <div className="tab-content " id="pills-tabContent">
          <div
            className="tab-pane fade show active task-name"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            tabindex="0"
          >
            <div className="d-flex gap-3">
              <select
                className="form-select tasks"
                style={{ width: "170px", fontSize: "0.9rem" }}
                aria-label="Default select example"
              >
                <option selected> Mitro-Hsp</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <select
                className="form-select tasks"
                style={{ width: "140px", fontSize: "0.9rem" }}
                aria-label="Default select example"
              >
                <option selected> Task</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="Task name ot type  '/' for commands"
            />

            <p
              style={{
                fontSize: "0.9rem",
                marginTop: "1.5rem",
                color: "#222",
                letterSpacing: "0.6px",
              }}
            >
              {" "}
              <span>
                <svg
                  height="16px"
                  width="16px"
                  fill="#000000"
                  viewBox="0 0 32 32"
                  data-name="Layer 1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <rect height="1" width="7" x="13" y="2"></rect>
                    <rect height="1" width="10" x="10" y="27"></rect>
                    <rect
                      height="1"
                      transform="translate(-10 23) rotate(-90)"
                      width="15"
                      x="-1"
                      y="16"
                    ></rect>
                    <rect
                      height="1"
                      transform="translate(8.5 38.5) rotate(-90)"
                      width="18"
                      x="14.5"
                      y="14.5"
                    ></rect>
                    <rect height="1" width="7" x="6" y="8"></rect>
                    <rect
                      height="1"
                      transform="translate(-1.05 8.18) rotate(-45)"
                      width="8.49"
                      x="5.11"
                      y="4.85"
                    ></rect>
                    <rect
                      height="1"
                      transform="translate(7 18) rotate(-90)"
                      width="7"
                      x="9"
                      y="5"
                    ></rect>
                    <rect height="1" width="10" x="12" y="29"></rect>
                    <rect
                      height="1"
                      transform="translate(8.5 42.5) rotate(-90)"
                      width="18"
                      x="16.5"
                      y="16.5"
                    ></rect>
                    <path d="M22,30V29h2a1,1,0,0,0,1-1V26h1v2a2,2,0,0,1-2,2Z"></path>
                    <path d="M20,28V27h2a1,1,0,0,0,1-1V24h1v2a2,2,0,0,1-2,2Z"></path>
                    <path d="M10,28V27H8a1,1,0,0,1-1-1V24H6v2a2,2,0,0,0,2,2Z"></path>
                    <path d="M20,2V3h2a1,1,0,0,1,1,1V6h1V4a2,2,0,0,0-2-2Z"></path>
                    <path d="M23,4V5h1a1,1,0,0,1,1,1V8h1V6a2,2,0,0,0-2-2Z"></path>
                    <path d="M12,30V29H10a1,1,0,0,1-1-1V27H8v1a2,2,0,0,0,2,2Z"></path>
                  </g>
                </svg>
              </span>{" "}
              Add Description
            </p>

            <input
              type="text"
              placeholder="...."
              style={{ marginTop: "3px" }}
            />
            <Form layout="vertical">
              <Row gutter={16}>
                <Col span={11}>
                  <Form.Item>
                    <Input
                      name="DeadLine"
                      type="date"
                      value={newSubList.DeadLine}
                      onChange={handleChange}
                      placeholder="DeadLine"
                    />
                  </Form.Item>
                </Col>
                <Col span={11}>
                  <Form.Item>
                    <Select
                      style={{ marginTop: "14px" }}
                      placeholder="priority"
                      //   value={newSubList.AsigneeName}
                      onChange={handleSelectPriority}
                      virtual={false}
                      dropdownStyle={{
                        overflowY: "auto",
                        scrollBehavior: "smooth",
                      }}
                    >
                      <Option value="Urgent" style={{ color: "red" }}>
                        Urgent
                      </Option>
                      <Option value="High" style={{ color: "blue" }}>
                        High
                      </Option>
                      <Option value="normal" style={{ color: "#FFD700" }}>
                        normal
                      </Option>
                      <Option value="low" style={{ color: "green" }}>
                        low
                      </Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
          <div
            className="tab-pane fade task-name"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
            tabindex="0"
          >
            <input
              type="text"
              value={docsDatas}
              onChange={(e) => setDocsDatas(e.target.value)}
              placeholder="Name this Doc..."
            />
            <input
              type="file"
              onChange={(e) => setdocss(e.target.files[0])}
              placeholder=""
            />
            <button
              style={{
                backgroundColor: "coral",
                color: "white",
                padding: "3px 8px",
                border: "none",
                borderRadius: "3px",
                marginRight: "10px",
                // right:"1",
              }}
              onClick={() => handleSubmit()}
            >
              Submit Docs
            </button>
          </div>

          <div>
            <br />
            <h6>All Uploaded Docs </h6>
            {uploadedDocs?.map((item) => (
              <div key={item._id}>
                {console.log("item.docs", item.docs)}
                <a
                  href={`${import.meta.env.VITE_BACKEND_API}/${item.docs}`}  >  {item.docsName}
                  </a>

                  {/* <iframe src={`${import.meta.env.VITE_BACKEND_API}/${item.docs}`} width="100%" height="auto">
                  <p>Your browser does not support iframes.</p>
                   </iframe> */}
              </div>
            ))}

          </div>
        </div>
      </div>
    </Modal>