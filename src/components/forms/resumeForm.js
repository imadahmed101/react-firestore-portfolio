import { useRef } from 'react'
import { storage, db } from '../../firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { collection, addDoc } from 'firebase/firestore'

const ResumeForm = () => {
  const form = useRef();

  const submitResume = (e) => {
    e.preventDefault();
    const cv = form.current[0]?.files[0];

    const storageRef = ref(storage, `resume/${cv.name}`);

    uploadBytes(storageRef, cv).then(
      (snapshot) => {
        getDownloadURL(snapshot.ref).then(
          (downloadUrl) => {
            saveResume({
              cv: downloadUrl
            })
          }, () => {
            saveResume({
              cv: null
            })

          })
      }, () => {
        saveResume({
          cv: null
        })

      }
    )
  }

  const saveResume = async (resume) => {
    console.log(resume);
    try {
      await addDoc(collection(db, 'resume'), resume);
      alert('Added Resume');
      window.location.reload(false);
    }
    catch (error) {
      console.log(error);
      alert('Failed to add Resume');
    }
  }


  return (
    <div>

      <h3>Resume Form</h3>

      <form ref={form} onSubmit={submitResume}>
        <input type="file" placeholder="Resume" />
        <br />
        <button type="submit">Submit</button>

      </form>

    </div>
  )
}

export default ResumeForm