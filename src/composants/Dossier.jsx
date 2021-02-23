import '../style/Dossier.scss';
import MoreVert from '@material-ui/icons/MoreVert';
import Sort from '@material-ui/icons/Sort';
import { grey } from '@material-ui/core/colors';
export default function Dossier({id, titre, couleur, dateModif}) {
  return (
    <article className="Dossier">
      <div className="couverture">
        <span className="deplacer"><Sort style={{ fontSize: 15, color: grey[500] }} /></span>
        <img src={`images-dossiers/${id}.png`} alt={titre}/>
      </div>
      <div className="info">
        <h2>{titre}</h2>
        <p>{dateModif}</p>
      </div>
      <button> <MoreVert /> </button>
    </article>
  );
}