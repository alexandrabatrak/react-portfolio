export default function Container({ children }) {
  return (
    <div className='container fluid'>
      <div className='row'>{children}</div>
    </div>
  );
}
