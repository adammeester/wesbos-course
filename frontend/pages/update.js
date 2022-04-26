import UpdateProduct from '../components/UpdateProduct';

UpdateProduct``;

export default function UpdatePage({ query }) {
  return (
    <div>
      <UpdateProduct id={query.id} />
    </div>
  );
}
