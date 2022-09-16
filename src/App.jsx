import Header from "./components/Header/Header";

/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 16/09/2022 - 17:29:06
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 16/09/2022
 * - Author          : Michael
 * - Modification    :
 **/
const title = "SummonIt News AI";
const description =
  "Feeling too lazy to use your keyboard before reading the news? Call it up!";
function App() {
  return (
    <main className="flex justify-center p-8">
      <div>
        <Header title={title} description={description} />
      </div>
    </main>
  );
}

export default App;
