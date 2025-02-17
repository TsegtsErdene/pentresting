import React from 'react';


const Shoadan = ({ results }) => {
 



    return (
        <div className="bg-white mt-3 px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
        <strong className="text-gray-700 font-large text-lg">Shoden result</strong>
  
        <div className="grid grid-cols-2 gap-4 mt-3">
          <div className="font-medium">IP:</div>
          <div>{results.ip_str}</div>
          <div className="font-medium">City:</div>
          <div>{results.city}</div>
          <div className="font-medium">Country:</div>
          <div>{results.country_name}</div>
          <div className="font-medium">Org:</div>
          <div>{results.org}</div>
          <div className="font-medium">Latitude:</div>
          <div>{results.latitude}</div>
          <div className="font-medium">Longitude:</div>
          <div>{results.longitude}</div>
          <div className="font-medium">ISP:</div>
          <div>{results.isp}</div>
          <div className="font-medium">Ports:</div>
          <div>{results.ports.join(", ")}</div>
          <div className="font-medium">Tags:</div>
          <div>{results.tags.join(", ")}</div>
        </div>
     
    </div>
  
      );
        // <div className="container mx-auto mt-5">
        //     <h1 className="text-center text-3xl font-bold">Shodan DNS Resolve Results</h1>
        //     {results && (
        //         <table className="w-full table-auto">
        //             <thead>
        //                 <tr>
        //                     <th>IP Address</th>
        //                     <th>Hostname</th>
        //                     <th>ASN</th>
        //                     <th>Country</th>
        //                     <th>Organization</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {results.results.map((domain, index) => (
        //                     <tr key={index}>
        //                         <td>{domain.ip}</td>
        //                         <td>{domain.hostname}</td>
        //                         <td>{domain.asn}</td>
        //                         <td>{domain.country}</td>
        //                         <td>{domain.organization}</td>
        //                     </tr>
        //                 ))}
        //             </tbody>
        //         </table>
        //     )}
        // </div>
    
}

export default Shoadan
