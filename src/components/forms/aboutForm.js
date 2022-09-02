import { useRef } from 'react'
import { storage, db } from '../../firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { collection, addDoc } from 'firebase/firestore'

const AboutForm = () => {
  
  const aboutForm = useRef();

  const submitAbout = (e) => {
    e.preventDefault();
    const name = aboutForm.current[0]?.value;
    const description = aboutForm.current[1]?.value;
    const image = aboutForm.current[2]?.files[0];

    const storageRef = ref(storage, `portfolio/${image.name}`);

    uploadBytes(storageRef, image).then(
      (snapshot) => {
        getDownloadURL(snapshot.ref).then(
          (downloadUrl) => {
            saveAbout({
              name,
              description,
              image: downloadUrl
            })
          }, () => {
            saveAbout({
              name,
              description,
              image: null
            })

          })
      }, () => {
        saveAbout({
          name,
          description,
          image: null
        })

      }
    )
  }

  const saveAbout = async (portfolio) => {
    console.log(portfolio);
    try {
      await addDoc(collection(db, 'about'), portfolio);

      window.location.reload(false);
    }
    catch (error) {
      console.log(error);
      alert('Failed to add about section');
    }
  }

  return (
    <div>
      <h3>About Form</h3>

      <form ref={aboutForm} onSubmit={submitAbout}>
        <input type="text" placeholder="Name" />
        <br />
        <textarea placeholder="Description" />
        <br />
        <input type="file" placeholder="Image" />
        <br />
        <button type="submit">Submit</button>
        <br />

      </form>

    </div>
  )
}

export default AboutForm