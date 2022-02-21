import React, { useEffect, useState } from 'react'
import { ToDoUserSchema } from './ValidationSchema'
import { Field, FieldArray, Formik } from 'formik';


const DataCrud = () => {
    const [dataList, setDataList] = useState([]);
    let data = [
        {
          id: 1,
          name: "girish chaudhari",
          email: "girish@gmail.com",
          mobile: "9021929562",
          project: "otm",
          task: "admin panel",
          status: "progress",
          start_time: "20/02/22",
          end_time: "04/03/22",
        },
        {
          id: 2,
          name: "vinay chaudhari",
          email: "vinay@gmail.com",
          mobile: "9021929562",
          project: "otm-react",
          task: "admin panel",
          status: "done",
          start_time: "20/02/22",
          end_time: "04/03/22",
        },
        {
          id: 3,
          name: "girish chaudhari",
          email: "girish@gmail.com",
          mobile: "9021929562",
          project: "otm-admin-panel",
          task: "admin panel",
          status: "planned",
          start_time: "20/02/22",
          end_time: "04/03/22",
        },
        {
          id: 4,
          name: "sunil chaudhari",
          email: "sunil@gmail.com",
          mobile: "9021929562",
          project: "otm-vendor",
          task: "admin panel",
          status: "planned",
          start_time: "20/02/22",
          end_time: "04/03/22",
        },
      ];
      function fetchData() {
        //   listData = data;
        setDataList(data);
      }
      const handleUpdate = (id) =>{
        console.log(id)
        console.log("id with data", dataList[id])
      }
      const handleDelete = (id) =>{
        for (let i = 0; i < data.length; i++) {
            let dataItem = data[i];
            if (dataItem.id == id) {
              data.splice(i, 1);
            }
          }

        console.log(id)
        data.splice(id, 1)
        console.log(dataList)
        fetchData()
      }

    const handleFormSubmit = (values) => {
        console.log("values ==>", values);
        // data.push(values)
        data[dataList.length] = values
        fetchData()
    }

    function handleselect(e){
        let selected = e.target.value
        console.log("values of select",e.target.value)
        let x = data.filter((a)=>{if(a.status==selected){return a}});
        setDataList(x)
    }


    useEffect(() => {
        fetchData();
      }, []);


  return (
    <div>
        <Formik
            initialValues={{
             name:'',
             email:'',
             mobile:'',
             project:'',
             task:'',
             status:'',
             start_time:'',
             end_time:''
            }}
            validationSchema={ToDoUserSchema}
            onSubmit={handleFormSubmit}
          >
            {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
                <div>
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <form onSubmit={handleSubmit} noValidate>
                                    <div className="form">
                                        <div className="input-form">
                                            <label htmlFor="name">Name</label>
                                            <input
                                            type="text"
                                            value={values.name}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            id="name"
                                            // onKeyDown={NameControl}
                                            className="input-control"
                                            />
                                            <div className="error">{errors.name}</div>
                                        </div>
                                        <div className="input-form">
                                            <label htmlFor="email">email</label>
                                            <input
                                            type="text"
                                            value={values.email}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            id="email"
                                            className="input-control"
                                            />
                                            <div className="error">{errors.email}</div>
                                        </div>
                                        <div className="input-form">
                                            <label htmlFor="mobile">Mobile no</label>
                                            <input
                                            type="text"
                                            id="mobile"
                                            value={values.mobile}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            maxLength="10"
                                            className="input-control"
                                            />
                                            <div className="error">{errors.mobile}</div>
                                        </div>
                                        <div className="input-form">
                                            <label htmlFor="project">Project name</label>
                                            <input
                                            type="text"
                                            value={values.project}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            id="project"
                                            className="input-control"
                                            />
                                            <div className="error">{errors.project}</div>
                                        </div>
                                        <div className="input-form">
                                            <label htmlFor="task">Task</label>
                                            <input
                                            type="text"
                                            id="task"
                                            value={values.task}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            className="input-control"
                                            />
                                            <div className="error">{errors.task}</div>
                                        </div>
                                        <div className="input-form">
                                            <label htmlFor="start-date">Start Date</label>
                                            <input
                                            type="date"
                                            id="start-date"
                                            name='start_time'
                                            value={values.start_time}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            />
                                            <div className="error">{errors.start_time}</div>
                                        </div>
                                        <div className="input-form">
                                            <label htmlFor="end-date">Start Date</label>
                                            <input
                                            type="date"
                                            id="end-date"
                                            name='end_time'
                                            value={values.end_time}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            />
                                            <div className="error">{errors.end_time}</div>
                                        </div>
                                        <div className="input-form task-status">
                                            <div className="radio-control">
                                            <input
                                                type="radio"
                                                id="planned"
                                                name="status"
                                                value="planned"
                                                // onChange={(e) => setStatus(e.target.value)}
                                            />
                                            <label htmlFor="planned">planned</label>
                                            </div>
                                            <div className="radio-control">
                                            <input
                                                type="radio"
                                                id="progress"
                                                name="status"
                                                value="progress"
                                                // onChange={(e) => setStatus(e.target.value)}
                                            />
                                            <label htmlFor="progress">progress</label>
                                            </div>
                                            <div className="radio-control">
                                            <input
                                                type="radio"
                                                id="done"
                                                name="status"
                                                value="done"
                                                // onChange={(e) => setStatus(e.target.value)}
                                            />
                                            <label htmlFor="done">done</label>
                                            {/* <div className='error'>{errors.status}</div> */}
                                            </div>
                                        </div>
                                <button
                                    type="submit"
                                    className="btn success"
                                    onClick={handleSubmit}
                                >
                                    submit
                                         </button>
                                    </div>
                                 </form>

                                </div>
                            </div>
                            <div className="col col-table">
                                <select name="filter" id="" onChange={handleselect}>
                                    <option >Please select the option</option>
                                    <option value="done">Done</option>
                                    <option value="progress">Progress</option>
                                    <option value="planned">Planned</option>
                                </select>
                            <div className="list">
                                <table className="table">
                                <thead>
                                    <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile No.</th>
                                    <th>Project Name.</th>
                                    <th>Task</th>
                                    <th>Task Status</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Edit Update</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataList.map((item, i) => (
                                    <tr key={i}>
                                        <td>{i}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.mobile}</td>
                                        <td>{item.project}</td>
                                        <td>{item.task}</td>
                                        <td>{item.status}</td>
                                        <td>{item.start_time}</td>
                                        <td>{item.end_time}</td>
                                        <td className="buttons">
                                        <button
                                            className="btn warning"
                                            onClick={() => handleUpdate(i)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn danger"
                                            onClick={() => handleDelete(item.id)}
                                        >
                                            Delete
                                        </button>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                </div>
            )}
        </Formik>
    </div>
  )
}

export default DataCrud;