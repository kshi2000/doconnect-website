import RecordsTable from "./components/RecordsTable";

const PatientRecordsPage = () => {
  const DUMMY_RECORDS = [
    {
      name: "Vinayak",
      age: 23,
      sex: "F",
      number: "908279127127",
      diseases: {
        cholera: 100,
        malaria: 488,
      },
    },
    {
      name: "sasas",
      age: 21,
      sex: "M",
      number: "908212712721",
      diseases: {
        cholera: 100,
        malaria: 488,
      },
    },
  ];
  return <RecordsTable records={DUMMY_RECORDS} />;
};

export default PatientRecordsPage;
