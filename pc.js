const fetchUser = async () => {
  try {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
  } catch (error) {
    console.log("error");
  }finally{
    console.log("Users fetched")
  }
};

fetchUser();
