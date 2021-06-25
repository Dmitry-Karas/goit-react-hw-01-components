import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import Section from "./components/Section/Section";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import user from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

const App = () => (
  <div>
    <Section title="profile">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </Section>

    <Statistics title="Upload stats" stats={statisticalData} />
    <Statistics stats={statisticalData} />

    <Section title="friendlist">
      <FriendList friends={friends} />
    </Section>

    <Section title="transaction history">
      <TransactionHistory items={transactions} />
    </Section>
  </div>
);
export default App;
