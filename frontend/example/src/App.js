import './App.css';
import Counter from './components/Counter';
import { useSelector, useDispatch } from 'react-redux'
import { useGetUserQuery,useSetUserMutation } from './store/services/data'
import { useEffect } from 'react'
import { useForm } from "react-hook-form";

function App() {

  const [count, deneme] = useSelector((state) => {
    return [state.counter.value, state.counter.deneme]
  })


  const { data, error, isLoading,refetch } = useGetUserQuery()
  const [postData, {isLoading:isloadingPost}] = useSetUserMutation()

  // useEffect(() => {
  //   console.log(data)
  // }, [data,refetch])

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async data => {
    await postData(data)
    refetch();
  };


  return (
    <div className="App">
      {isLoading && <div>isLoading...</div>}
      {error && <div>erorr</div>}
      {data && <div>
        <table>
          <tr>
            <th>Name</th>
            <th>email</th>
            <th>yas</th>
          </tr>
          {data.data.map((e,index)=>{
        return <tr key={index}>
          <td>{e.nva_name}</td>
          <td>{e.nva_email} </td>
          <td>{e.int_yas} </td>
        </tr>
       })}
        </table>

       
      </div>}
      <form onSubmit={handleSubmit(onSubmit)}>

        <input defaultValue="" {...register("name")} />


        <input {...register("email", { required: true })} />

        <input type={'number'} {...register("yas", { required: true })} />

        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
      {isloadingPost && <div>isLoading...</div>}
    </div>
  );
}

export default App;
