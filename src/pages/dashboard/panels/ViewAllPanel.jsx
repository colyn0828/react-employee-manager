import React from 'react';
import firebaseApp from './../../../firebase/firebaseConfig';

const ViewAllPanel = () => {

    // path to the document
    const docRef = firebaseApp.firestore().collection('users').doc(firebaseApp.auth().currentUser.uid);
    const clientRef = docRef.collection('employees').doc('a1');
    
    clientRef.get()
    .then(doc=>{
        console.log(doc.data());
    })
    .catch(error=>{
        console.log(error);
    })
    

    return ( 
        <header>
            <h2>View All Panels</h2>
        </header>
     );
}
 
export default ViewAllPanel;