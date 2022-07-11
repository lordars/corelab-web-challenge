interface ISearch {
  placeholder: string;
  value: string;
  onChange:(e:React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = (props: ISearch) => {
  return (
    <input type="text" placeholder={props.placeholder} value={props.value}  onChange={props.onChange} />
  );
};

export default Search;
