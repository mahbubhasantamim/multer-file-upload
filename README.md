## React JS

> Import packages

```javaScript
import axios from "axios";
import { useForm } from "react-hook-form";
```

### Logic

```javaScript
  const { register, handleSubmit } = useForm();

  const submitForm = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/service",
        data,
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

### JSX

```javaScript
<div className="w-5/6 mt-8 mx-auto py-14">
        <form
          className="w-full"
          onSubmit={handleSubmit(submitForm)}
          encType="multipart/form-data"
        >
          <div className="flex flex-col lg:w-3/5 w-10/12 mb-8 mx-auto">
            <input
              type="text"
              name="serviceName"
              placeholder="Service Name"
              {...register("serviceName")}
              className={`bg-transparent text-sm border-b-2 border-gray-300 outline-none transition duration-500 ease-linear delay-100 focus:border-slate-500`}
            />
          </div>

          <div className="flex flex-col lg:w-3/5 w-10/12 mb-8 mx-auto">
            <input
              type="text"
              name="serviceID"
              placeholder="Service ID"
              {...register("serviceID")}
              className={`bg-transparent text-sm border-b-2 border-gray-300 outline-none transition duration-500 ease-linear delay-100 focus:border-slate-500`}
            />
          </div>

          <div className="flex flex-col lg:w-3/5 w-10/12 mb-8 mx-auto">
            <input
              type="text"
              name="serviceDesc"
              placeholder="Service Description"
              {...register("serviceDesc")}
              className={`bg-transparent text-sm border-b-2 border-gray-300 outline-none transition duration-500 ease-linear delay-100 focus:border-slate-500`}
            />
          </div>
          <div className=" lg:w-3/5 w-10/12 mb-1 mx-auto">
            <label
              htmlFor="logo"
              className="bg-slate-200 py-2 px-4 rounded-md font-semibold text-xs"
            >
              + Upload Logo
            </label>
          </div>

          <div className="flex flex-col lg:w-3/5 w-10/12 mb-8 mx-auto">
            <input
              type="file"
              name="serviceLogo"
              id="logo"
              {...register("serviceLogo")}
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
```

> service.jsx

```javaScript
import axios from "axios";
import { useForm } from "react-hook-form";

const ServiceCreate = () => {
  const { register, handleSubmit } = useForm();

  const submitForm = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/service",
        data,
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

  return (
    <div>
      <div className="w-5/6 mt-8 mx-auto py-14">
        <form
          className="w-full"
          onSubmit={handleSubmit(submitForm)}
          encType="multipart/form-data"
        >
          <div className="flex flex-col lg:w-3/5 w-10/12 mb-8 mx-auto">
            <input
              type="text"
              name="serviceName"
              placeholder="Service Name"
              {...register("serviceName")}
              className={`bg-transparent text-sm border-b-2 border-gray-300 outline-none transition duration-500 ease-linear delay-100 focus:border-slate-500`}
            />
          </div>

          <div className="flex flex-col lg:w-3/5 w-10/12 mb-8 mx-auto">
            <input
              type="text"
              name="serviceID"
              placeholder="Service ID"
              {...register("serviceID")}
              className={`bg-transparent text-sm border-b-2 border-gray-300 outline-none transition duration-500 ease-linear delay-100 focus:border-slate-500`}
            />
          </div>

          <div className="flex flex-col lg:w-3/5 w-10/12 mb-8 mx-auto">
            <input
              type="text"
              name="serviceDesc"
              placeholder="Service Description"
              {...register("serviceDesc")}
              className={`bg-transparent text-sm border-b-2 border-gray-300 outline-none transition duration-500 ease-linear delay-100 focus:border-slate-500`}
            />
          </div>
          <div className=" lg:w-3/5 w-10/12 mb-1 mx-auto">
            <label
              htmlFor="logo"
              className="bg-slate-200 py-2 px-4 rounded-md font-semibold text-xs"
            >
              + Upload Logo
            </label>
          </div>

          <div className="flex flex-col lg:w-3/5 w-10/12 mb-8 mx-auto">
            <input
              type="file"
              name="serviceLogo"
              id="logo"
              {...register("serviceLogo")}
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
  );
};

export default ServiceCreate;
```
