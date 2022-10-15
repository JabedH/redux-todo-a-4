import { Provider } from "react-redux";
import CompleteTodo from "./components/CompleteTodo";
import CompleteTodos from "./components/CompleteTodos";
import Footer from "./components/Footer";
import Footer1 from "./components/Footer1";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className=" bg-blue-100 lg:h-screen  font-sans">
        <Navbar />
        <h3 className="lg:text-5xl lg:leading-relaxed leading-relaxed uppercase text-3xl font-bold text-center mt-10 text-violet-600">
          Welcome to redux <br /> todo application
        </h3>
        <p className="lg:text-2xl text-xl font-bold text-center lg:m-10 mt-5 text-gray-700">
          Create your todo and complete it, Makes life easier.
        </p>
        <div className=" rounded-lg p-6 ">
          <div className="flex justify-center mb-10">
            <div className="bg-white lg:w-[800px] rounded-lg">
              <Header />
            </div>
          </div>
          <div className="lg:grid grid-cols-2 gap-10 my-10">
            <div className="">
              <h3 className="text-center m-3 text-2xl font-bold text-gray-700">
                Added Todo List
              </h3>
              <div className="bg-white rounded-lg">
                <TodoList />
                <Footer />
              </div>
            </div>
            <div className="  ">
              <h3 className="text-center m-3 text-2xl font-bold text-gray-700">
                Completed Todo List
              </h3>
              <div className="bg-white rounded-lg">
                <CompleteTodos />
                <Footer1 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
