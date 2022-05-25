import PageHeading from "../components/PageHeading";
export default function Misc() {
  return (
    <div>
      <PageHeading
        content={"Scholarship"}
        image={"/assets/52VintageSunbursts/Black/PNG/Black-42.png"}
      />
      <div>
        <h2>Publications</h2>
      </div>
      <ul className="hanging-indent-ul">
        <li className="hanging-indent">
          “History, Hair, and Reimagining Racial Categories in Junot Díaz’s The
          Brief Wondrous Life of Oscar Wao.” Critique: Studies in Contemporary
          Fiction 54.2 (2013): 211–24. Print. Abstract
        </li>

        <li className="hanging-indent">
          {" "}
          “‘Maps of the World in Its Becoming’: Post-Apocalyptic Naming in
          Cormac McCarthy’s The Road.” Journal of Modern Literature 33.1 (2009):
          57–74. Print. Reprinted in Cormac McCarthy’s The Road (Bloom’s
          Guides). Ed. Harold Bloom. New York: Chelsea House, 2011. 91–107.
          Print. Abstract
        </li>
      </ul>
      <h2>Selected Presentations</h2>
      <ul className="hanging-indent-ul">
        <li className="hanging-indent">
          “It’s Just Not that Simple: Redeployment and the Just/Unjust Divide.”
          American Literature Association Annual Conference, Boston, MA, May
          25–28, 2017.
        </li>
        <li className="hanging-indent">
          “Revising the 2003 War in Iraq: Genre Switching and Public Discourse
          in David Abrams’ Fobbit.” International Conference on Narrative,
          Lexington, KY, Mar. 23–26, 2017.
        </li>
        <li className="hanging-indent">
          “Just Like a Movie, Only More So: Representation, Reality, and
          Embedded Reporting in Billy Lynn’s Long Halftime Walk,” Pop Cultural
          Association/American Culture Association National Conference, Seattle,
          WA, Mar. 22–25, 2016.
        </li>
      </ul>
    </div>
  );
}