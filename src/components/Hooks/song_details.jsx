import { useEffect, useState } from "react";

export default function song_details() {
  const [value, setvalue] = useState();

  useEffect(() => {
    fetch("/api/songs/prJPL1jw")
      .then((res) => res.json())
      .then((data) => setvalue(data));
  }, []);

  return value;
}
