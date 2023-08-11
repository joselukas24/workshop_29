export default function NewPlayerForm() {
  return (
    <div>
      <form>
        <label>
          Name: <input type="text" name="name" />
        </label>
        <br />
        <label>
          Breed: <input type="text" name="breed" />
        </label>
        <br />
        <label>
          imageUrl: <input type="text" name="imageUrl" />
        </label>
      </form>
    </div>
  );
}
