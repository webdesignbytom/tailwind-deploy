export const SubmitButton = ({ action }) => {
  return (
    <button
      onClick={action}
      type='submit'
      className='submit__button'
      data-mdb-ripple='true'
      data-mdb-ripple-color='light'
    >
      Press
    </button>
  );
};
