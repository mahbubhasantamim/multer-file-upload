## API Fetch - React JS

**Import packages**

```javaScript
import axios from "axios";
import { useState } from "react";
```

**State define**

```javaScript
  const [selectedFile, setSelectedFile] = useState(null);
  const [data, setData] = useState({
    serviceName: "",
    serviceID: "",
    serviceDesc: "",
  });
```

**Handle form data**

```javaScript
  //handle form data
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };
```

**Handle file upload & preview**

```javaScript
  //handle file upload & preview
  const onFileChange = function (event) {
    setSelectedFile(event.target.files[0]);

    let reader = new FileReader();
    reader.onload = function () {
      let output = document.getElementById("logoPreview");
      output.style.display = "block";
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  };
```

**Submit form**

```javaScript
  //form submit handler
  const formSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      if (selectedFile) {
        formData.append("serviceLogo", selectedFile);
        formData.append("serviceName", data.serviceName);
        formData.append("serviceID", data.serviceID);
        formData.append("serviceDesc", data.serviceDesc);
      } else {
        formData.append("serviceName", data.serviceName);
        formData.append("serviceID", data.serviceID);
        formData.append("serviceDesc", data.serviceDesc);
      }

      //fetch api
      const response = await axios.post(
        "http://localhost:5000/api/v1/service",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: localStorage.getItem("access_token"),
          },
        }
      );
      if (response.data.status === "ok") {
        console.log("Service create successfully!", response.data);
      } else {
        console.error("Service createfailed:", response.data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };
```

**JSX**

```javaScript
  <div>
      <div className="w-5/6 mt-8 mx-auto py-14">
        <form
          className="w-full"
          onSubmit={formSubmit}
          encType="multipart/form-data"
        >
          <div className="flex flex-col lg:w-3/5 w-10/12 mb-8 mx-auto">
            <input
              type="text"
              name="serviceName"
              placeholder="Service Name"
              onChange={handleInputChange}
              className={`bg-transparent text-sm border-b-2 border-gray-300 outline-none transition duration-500 ease-linear delay-100 focus:border-slate-500`}
            />
          </div>

          <div className="flex flex-col lg:w-3/5 w-10/12 mb-8 mx-auto">
            <input
              type="text"
              name="serviceID"
              placeholder="Service ID"
              onChange={handleInputChange}
              className={`bg-transparent text-sm border-b-2 border-gray-300 outline-none transition duration-500 ease-linear delay-100 focus:border-slate-500`}
            />
          </div>

          <div className="flex flex-col lg:w-3/5 w-10/12 mb-8 mx-auto">
            <input
              type="text"
              name="serviceDesc"
              placeholder="Service Description"
              onChange={handleInputChange}
              className={`bg-transparent text-sm border-b-2 border-gray-300 outline-none transition duration-500 ease-linear delay-100 focus:border-slate-500`}
            />
          </div>
          <div className="lg:w-3/5 w-10/12 mb-1 mx-auto">
            <label
              htmlFor="logo"
              className="float-left bg-slate-200 py-2 px-4 rounded-md font-semibold text-xs"
            >
              + Upload Logo
            </label>

          {/* image preview  */}
            <img
              className="hidden h-14 w-14 float-right rounded-full"
              id="logoPreview"
            />
          </div>

          <div className="flex flex-col lg:w-3/5 w-10/12 mb-8 mx-auto">
            <input
              type="file"
              name="serviceLogo"
              id="logo"
              onChange={onFileChange}
              className={`hidden bg-transparent text-sm border-b-2 border-gray-300 outline-none transition duration-500 ease-linear delay-100 focus:border-slate-500`}
            />
          </div>

          <div className="mx-auto lg:w-3/5 w-10/12 text-right">
            <input
              type="submit"
              value="Create Service"
              className=" py-2 px-8 text-sm w-full lg:w-fit bg-slate-500 rounded-md text-white font-semibold shadow-lg hover:shadow-sm hover:cursor-pointer transition-all duration-500 ease-in-out delay-75 scale-100"
            />
          </div>
        </form>
      </div>
    </div>

```
