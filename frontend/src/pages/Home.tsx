import AppHeader from '../components/AppHeader';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';

const Home = () => {
  return (
    <main className="bg-gray-100 min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-[759px] border rounded-md shadow p-6 bg-white">
        <AppHeader />
        <TaskInput />
        <TaskList />
      </div>
    </main>
  );
};

export default Home;
