import { useRef } from 'react'
import { auth, storage, db } from '../../firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { addDoc } from 'firebase/firestore'
import { collection } from 'firebase/firestore/lite'

const Home = () => {
  const form = useRef();

  const submitPortfolio = (e) => {
    e.preventDefault();
    const name = form.current[0]?.value;
    const description = form.current[1]?.value;
    const url = form.current[2]?.value;
    const image = form.current[3]?.files[0];

    const storageRef = ref(storage, `portfolio/${image.name}`);

    uploadBytes(storageRef, image).then(
      (snapshot)=>{
        getDownloadURL(snapshot.ref).then(
          (downloadUrl)=> {
            savePortfolio({
              name,
              description,
              url,
              image: downloadUrl
            })
          },  () =>{
            savePortfolio({
              name,
              description,
              url,
              image: null
            })
    
          })
      }, () =>{
        savePortfolio({
          name,
          description,
          url,
          image: null
        })

      }
      )
  }

  const savePortfolio = async (portfolio) => {
    console.log(portfolio);
    try{
      await addDoc(collection(db, 'portfolio'), portfolio);
      window.location.reload(true);
    }
    catch(error){
      alert('Failed to add portfolio');
    }
  }

  return (
    <div>Dashboard Homepage
      <form ref={form} onSubmit={submitPortfolio}>
        <input type="text" placeholder="Name"/>
        <br/>
        <textarea placeholder="Description"/>
        <br/>
        <input type="text" placeholder="URL"/>
        <br/>
        <input type="file" placeholder="Image"/>
        <br/>
        <button type="submit">Submit</button>
        <br/>
        <button onClick={() => auth.signOut()}>Sign out</button>

      </form>
    </div>
  )
}

export default Home