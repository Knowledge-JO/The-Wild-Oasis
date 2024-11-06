import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>

        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// function AddCabin() {
//   const [isOPenModal, setIsOPenModal] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setIsOPenModal((show) => !show)}>
//         Add new cabin
//       </Button>

//       {isOPenModal && (
//         <Modal onClose={() => setIsOPenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOPenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
