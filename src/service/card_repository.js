import { set, ref, getDatabase, remove, onValue, off } from "firebase/database";
class CardRepository {
  constructor(app) {
    this.db = getDatabase(app);
  }
  saveCard(userId, card) {
    set(ref(this.db, `${userId}/cards/${card.id}`), card);
  }
  removeCard(userId, card) {
    remove(ref(this.db, `${userId}/cards/${card.id}`));
  }
  syncCards(userId, onUpdate) {
    const query = ref(this.db, `${userId}/cards`);
    onValue(query, (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => off(query);
  }
}
export default CardRepository;
