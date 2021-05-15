import firebase from "../config/firebase";

const db = firebase.firestore();

// Shake the data to get the document id and not
// juat the fields we defined ourselves
export function dataFromSnapshot(snapshot) {
  if (!snapshot.exists) return undefined;
  const data = snapshot.data();

  for (const prop in data) {
    if (data.hasOwnProperty(prop)) {
      if (data[prop] instanceof firebase.firestore.Timestamp) {
        data[prop] = data[prop].toDate();
      }
    }
  }

  return {
    ...data,
    id: snapshot.id,
  };
}

export function getEventsFromFirestore(observer) {
  return db.collection("events").onSnapshot(observer);
}
