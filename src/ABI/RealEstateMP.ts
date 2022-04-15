export const ABI = {
  "contractName": "RealEstateMP",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "ownerPropertiesCount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "salesLength",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "propertiesLength",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "sales",
      "outputs": [
        {
          "name": "price",
          "type": "uint256"
        },
        {
          "name": "sellerId",
          "type": "address"
        },
        {
          "name": "saleDate",
          "type": "uint256"
        },
        {
          "name": "propertyId",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "properties",
      "outputs": [
        {
          "name": "localisation",
          "type": "string"
        },
        {
          "name": "area",
          "type": "uint256"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "chamberCount",
          "type": "uint256"
        },
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_localisation",
          "type": "string"
        },
        {
          "name": "_area",
          "type": "uint256"
        },
        {
          "name": "_description",
          "type": "string"
        },
        {
          "name": "_chamberCount",
          "type": "uint256"
        }
      ],
      "name": "createProperty",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_price",
          "type": "uint256"
        },
        {
          "name": "_sellerId",
          "type": "address"
        },
        {
          "name": "_saleDate",
          "type": "uint256"
        },
        {
          "name": "_propertyId",
          "type": "uint256"
        }
      ],
      "name": "createSale",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_saleId",
          "type": "uint256"
        }
      ],
      "name": "buy",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.4.21+commit.dfe3193c\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"ownerPropertiesCount\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"salesLength\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"propertiesLength\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_price\",\"type\":\"uint256\"},{\"name\":\"_sellerId\",\"type\":\"address\"},{\"name\":\"_saleDate\",\"type\":\"uint256\"},{\"name\":\"_propertyId\",\"type\":\"uint256\"}],\"name\":\"createSale\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"sales\",\"outputs\":[{\"name\":\"price\",\"type\":\"uint256\"},{\"name\":\"sellerId\",\"type\":\"address\"},{\"name\":\"saleDate\",\"type\":\"uint256\"},{\"name\":\"propertyId\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_localisation\",\"type\":\"string\"},{\"name\":\"_area\",\"type\":\"uint256\"},{\"name\":\"_description\",\"type\":\"string\"},{\"name\":\"_chamberCount\",\"type\":\"uint256\"}],\"name\":\"createProperty\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_saleId\",\"type\":\"uint256\"}],\"name\":\"buy\",\"outputs\":[],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"properties\",\"outputs\":[{\"name\":\"localisation\",\"type\":\"string\"},{\"name\":\"area\",\"type\":\"uint256\"},{\"name\":\"description\",\"type\":\"string\"},{\"name\":\"chamberCount\",\"type\":\"uint256\"},{\"name\":\"owner\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"project:/contracts/RealEstateMP.sol\":\"RealEstateMP\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/RealEstateMP.sol\":{\"keccak256\":\"0xf36a7e8704743fec91ca302e350f8e6784d72f9429da09d72cc63fa805051b93\",\"urls\":[\"bzzr://31fea542126cbee25b31faf346419903afb470e5548de0bb8e54af3c79cd00c5\"]}},\"version\":1}",
  "bytecode": "0x60606040526000600355341561001457600080fd5b610cbd806100236000396000f30060606040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063110a41ca1461009357806313324e9c146100e057806340e4a05e1461010957806356c9ef6414610132578063b5f522f714610186578063c4294d6b146101fe578063d96a094a14610252578063f7b108081461026a575b600080fd5b341561009e57600080fd5b6100ca600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506103b3565b6040518082815260200191505060405180910390f35b34156100eb57600080fd5b6100f36103cb565b6040518082815260200191505060405180910390f35b341561011457600080fd5b61011c6103d1565b6040518082815260200191505060405180910390f35b341561013d57600080fd5b610184600480803590602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919080359060200190919050506103d7565b005b341561019157600080fd5b6101a760048080359060200190919050506104c4565b604051808581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182815260200194505050505060405180910390f35b341561020957600080fd5b610250600480803590602001908201803590602001919091929080359060200190919080359060200190820180359060200191909192908035906020019091905050610523565b005b61026860048080359060200190919050506106fb565b005b341561027557600080fd5b61028b6004808035906020019091905050610832565b6040518080602001868152602001806020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838103835288818151815260200191508051906020019080838360005b8381101561030d5780820151818401526020810190506102f2565b50505050905090810190601f16801561033a5780820380516001836020036101000a031916815260200191505b50838103825286818151815260200191508051906020019080838360005b83811015610373578082015181840152602081019050610358565b50505050905090810190601f1680156103a05780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b60046020528060005260406000206000915090505481565b60035481565b60015481565b6103df6109c7565b6080604051908101604052808681526020018573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018381525090506002805480600101828161042d9190610a06565b916000526020600020906004020160008390919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301555050506003600081548092919060010191905055505050505050565b6002818154811015156104d357fe5b90600052602060002090600402016000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030154905084565b61052b610a38565b60a06040519081016040528088888080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050815260200186815260200185858080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505081526020018381526020013373ffffffffffffffffffffffffffffffffffffffff168152509050600080548060010182816105e39190610a8a565b916000526020600020906005020160008390919091506000820151816000019080519060200190610615929190610abc565b5060208201518160010155604082015181600201908051906020019061063c929190610abc565b506060820151816003015560808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050600160008154809291906001019190505550600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050555050505050505050565b600060028281548110151561070c57fe5b906000526020600020906004020160000154341015151561072c57600080fd5b60028281548110151561073b57fe5b906000526020600020906004020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f1935050505015156107ac57600080fd5b6002828154811015156107bb57fe5b9060005260206000209060040201600301549050336000828154811015156107df57fe5b906000526020600020906005020160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b60008181548110151561084157fe5b9060005260206000209060050201600091509050806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108ed5780601f106108c2576101008083540402835291602001916108ed565b820191906000526020600020905b8154815290600101906020018083116108d057829003601f168201915b505050505090806001015490806002018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109915780601f1061096657610100808354040283529160200191610991565b820191906000526020600020905b81548152906001019060200180831161097457829003601f168201915b5050505050908060030154908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905085565b60806040519081016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081525090565b815481835581811511610a3357600402816004028360005260206000209182019101610a329190610b3c565b5b505050565b60a060405190810160405280610a4c610b9a565b815260200160008152602001610a60610b9a565b815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b815481835581811511610ab757600502816005028360005260206000209182019101610ab69190610bae565b5b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610afd57805160ff1916838001178555610b2b565b82800160010185558215610b2b579182015b82811115610b2a578251825591602001919060010190610b0f565b5b509050610b389190610c24565b5090565b610b9791905b80821115610b93576000808201600090556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556002820160009055600382016000905550600401610b42565b5090565b90565b602060405190810160405280600081525090565b610c2191905b80821115610c1d5760008082016000610bcd9190610c49565b6001820160009055600282016000610be59190610c49565b60038201600090556004820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905550600501610bb4565b5090565b90565b610c4691905b80821115610c42576000816000905550600101610c2a565b5090565b90565b50805460018160011615610100020316600290046000825580601f10610c6f5750610c8e565b601f016020900490600052602060002090810190610c8d9190610c24565b5b505600a165627a7a723058201c20abb678fd36d8d19d1d71b69c24f3fe220d1892d0212e93b38840dc3a40f90029",
  "deployedBytecode": "0x60606040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063110a41ca1461009357806313324e9c146100e057806340e4a05e1461010957806356c9ef6414610132578063b5f522f714610186578063c4294d6b146101fe578063d96a094a14610252578063f7b108081461026a575b600080fd5b341561009e57600080fd5b6100ca600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506103b3565b6040518082815260200191505060405180910390f35b34156100eb57600080fd5b6100f36103cb565b6040518082815260200191505060405180910390f35b341561011457600080fd5b61011c6103d1565b6040518082815260200191505060405180910390f35b341561013d57600080fd5b610184600480803590602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919080359060200190919050506103d7565b005b341561019157600080fd5b6101a760048080359060200190919050506104c4565b604051808581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182815260200194505050505060405180910390f35b341561020957600080fd5b610250600480803590602001908201803590602001919091929080359060200190919080359060200190820180359060200191909192908035906020019091905050610523565b005b61026860048080359060200190919050506106fb565b005b341561027557600080fd5b61028b6004808035906020019091905050610832565b6040518080602001868152602001806020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838103835288818151815260200191508051906020019080838360005b8381101561030d5780820151818401526020810190506102f2565b50505050905090810190601f16801561033a5780820380516001836020036101000a031916815260200191505b50838103825286818151815260200191508051906020019080838360005b83811015610373578082015181840152602081019050610358565b50505050905090810190601f1680156103a05780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b60046020528060005260406000206000915090505481565b60035481565b60015481565b6103df6109c7565b6080604051908101604052808681526020018573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018381525090506002805480600101828161042d9190610a06565b916000526020600020906004020160008390919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301555050506003600081548092919060010191905055505050505050565b6002818154811015156104d357fe5b90600052602060002090600402016000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030154905084565b61052b610a38565b60a06040519081016040528088888080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050815260200186815260200185858080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505081526020018381526020013373ffffffffffffffffffffffffffffffffffffffff168152509050600080548060010182816105e39190610a8a565b916000526020600020906005020160008390919091506000820151816000019080519060200190610615929190610abc565b5060208201518160010155604082015181600201908051906020019061063c929190610abc565b506060820151816003015560808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050600160008154809291906001019190505550600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050555050505050505050565b600060028281548110151561070c57fe5b906000526020600020906004020160000154341015151561072c57600080fd5b60028281548110151561073b57fe5b906000526020600020906004020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f1935050505015156107ac57600080fd5b6002828154811015156107bb57fe5b9060005260206000209060040201600301549050336000828154811015156107df57fe5b906000526020600020906005020160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b60008181548110151561084157fe5b9060005260206000209060050201600091509050806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108ed5780601f106108c2576101008083540402835291602001916108ed565b820191906000526020600020905b8154815290600101906020018083116108d057829003601f168201915b505050505090806001015490806002018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109915780601f1061096657610100808354040283529160200191610991565b820191906000526020600020905b81548152906001019060200180831161097457829003601f168201915b5050505050908060030154908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905085565b60806040519081016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081525090565b815481835581811511610a3357600402816004028360005260206000209182019101610a329190610b3c565b5b505050565b60a060405190810160405280610a4c610b9a565b815260200160008152602001610a60610b9a565b815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b815481835581811511610ab757600502816005028360005260206000209182019101610ab69190610bae565b5b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610afd57805160ff1916838001178555610b2b565b82800160010185558215610b2b579182015b82811115610b2a578251825591602001919060010190610b0f565b5b509050610b389190610c24565b5090565b610b9791905b80821115610b93576000808201600090556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556002820160009055600382016000905550600401610b42565b5090565b90565b602060405190810160405280600081525090565b610c2191905b80821115610c1d5760008082016000610bcd9190610c49565b6001820160009055600282016000610be59190610c49565b60038201600090556004820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905550600501610bb4565b5090565b90565b610c4691905b80821115610c42576000816000905550600101610c2a565b5090565b90565b50805460018160011615610100020316600290046000825580601f10610c6f5750610c8e565b601f016020900490600052602060002090810190610c8d9190610c24565b5b505600a165627a7a723058201c20abb678fd36d8d19d1d71b69c24f3fe220d1892d0212e93b38840dc3a40f90029",
  "sourceMap": "26:1358:0:-;;;449:1;423:27;;26:1358;;;;;;;;;;;;;;",
  "deployedSourceMap": "26:1358:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;457:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;423:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;364:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;863:233;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;398:19;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;521:336;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1102:280;;;;;;;;;;;;;;;;;;330:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;330:28:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;330:28:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;457:53;;;;;;;;;;;;;;;;;:::o;423:27::-;;;;:::o;364:28::-;;;;:::o;863:233::-;968:19;;:::i;:::-;990:47;;;;;;;;;995:6;990:47;;;;1003:9;990:47;;;;;;1014:9;990:47;;;;1025:11;990:47;;;968:69;;1047:5;:19;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;1058:7;1047:19;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1076:11;;:13;;;;;;;;;;;;;863:233;;;;;:::o;398:19::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;521:336::-;639:27;;:::i;:::-;669:71;;;;;;;;;678:13;;669:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;693:5;669:71;;;;700:12;;669:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;714:13;669:71;;;;729:10;669:71;;;;;639:101;;750:10;:28;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;766:11;750:28;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;788:16;;:18;;;;;;;;;;;;;816:20;:32;837:10;816:32;;;;;;;;;;;;;;;;:34;;;;;;;;;;;;;521:336;;;;;;;:::o;1102:280::-;1273:19;1183:5;1189:7;1183:14;;;;;;;;;;;;;;;;;;;;:20;;;1169:9;1164:39;;1156:48;;;;;;;;1214:5;1220:7;1214:14;;;;;;;;;;;;;;;;;;;;:23;;;;;;;;;;;;:32;;:49;1252:9;1214:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1295:5;1301:7;1295:14;;;;;;;;;;;;;;;;;;;;:25;;;1273:47;;1365:10;1330;1341:14;1330:26;;;;;;;;;;;;;;;;;;;;:32;;;:45;;;;;;;;;;;;;;;;;;1102:280;;:::o;330:28::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;26:1358::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o",
  "source": "pragma solidity ^0.4.21;\n\ncontract RealEstateMP {\n\n    struct Property {\n        string localisation;\n        uint area;\n        string description;\n        uint chamberCount;\n        address owner;\n    }\n\n    struct Sale {\n        uint price;\n        address sellerId;\n        uint saleDate;\n        uint propertyId;\n    }\n\n\n    Property[] public properties;\n    uint public propertiesLength;\n    Sale[] public sales;\n    uint public salesLength = 0;\n\n    mapping (address => uint) public ownerPropertiesCount;    \n\n    function createProperty(string _localisation, uint _area, string _description, uint _chamberCount) external {\n        Property memory newProperty = Property(_localisation, _area, _description, _chamberCount, msg.sender);\n        properties.push(newProperty);\n        propertiesLength++;\n        ownerPropertiesCount[msg.sender]++;\n    }\n\n    function createSale(uint _price, address _sellerId, uint _saleDate, uint _propertyId) external {\n        Sale memory newSale = Sale(_price, _sellerId, _saleDate, _propertyId);\n        sales.push(newSale);\n        salesLength++;\n    }\n\n    function buy(uint _saleId) external payable {\n        require(uint(msg.value) >= sales[_saleId].price);\n        sales[_saleId].sellerId.transfer(uint(msg.value));\n        uint propertySelled = sales[_saleId].propertyId;\n        properties[propertySelled].owner = msg.sender;\n    }\n}                          ",
  "sourcePath": "/Users/sokaii/Documents/ESGI/5MOC/Blockchain/RealEstateMP/contracts/RealEstateMP.sol",
  "ast": {
    "absolutePath": "project:/contracts/RealEstateMP.sol",
    "exportedSymbols": {
      "RealEstateMP": [
        149
      ]
    },
    "id": 150,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".21"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 149,
        "linearizedBaseContracts": [
          149
        ],
        "name": "RealEstateMP",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "RealEstateMP.Property",
            "id": 12,
            "members": [
              {
                "constant": false,
                "id": 3,
                "name": "localisation",
                "nodeType": "VariableDeclaration",
                "scope": 12,
                "src": "81:19:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string storage pointer"
                },
                "typeName": {
                  "id": 2,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "81:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string storage pointer"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 5,
                "name": "area",
                "nodeType": "VariableDeclaration",
                "scope": 12,
                "src": "110:9:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 4,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "110:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7,
                "name": "description",
                "nodeType": "VariableDeclaration",
                "scope": 12,
                "src": "129:18:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string storage pointer"
                },
                "typeName": {
                  "id": 6,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "129:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string storage pointer"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 9,
                "name": "chamberCount",
                "nodeType": "VariableDeclaration",
                "scope": 12,
                "src": "157:17:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 8,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "157:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 11,
                "name": "owner",
                "nodeType": "VariableDeclaration",
                "scope": 12,
                "src": "184:13:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 10,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "184:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Property",
            "nodeType": "StructDefinition",
            "scope": 149,
            "src": "55:149:0",
            "visibility": "public"
          },
          {
            "canonicalName": "RealEstateMP.Sale",
            "id": 21,
            "members": [
              {
                "constant": false,
                "id": 14,
                "name": "price",
                "nodeType": "VariableDeclaration",
                "scope": 21,
                "src": "232:10:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 13,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "232:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 16,
                "name": "sellerId",
                "nodeType": "VariableDeclaration",
                "scope": 21,
                "src": "252:16:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 15,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "252:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 18,
                "name": "saleDate",
                "nodeType": "VariableDeclaration",
                "scope": 21,
                "src": "278:13:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 17,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "278:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 20,
                "name": "propertyId",
                "nodeType": "VariableDeclaration",
                "scope": 21,
                "src": "301:15:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 19,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "301:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Sale",
            "nodeType": "StructDefinition",
            "scope": 149,
            "src": "210:113:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 24,
            "name": "properties",
            "nodeType": "VariableDeclaration",
            "scope": 149,
            "src": "330:28:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_Property_$12_storage_$dyn_storage",
              "typeString": "struct RealEstateMP.Property storage ref[] storage ref"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 22,
                "name": "Property",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 12,
                "src": "330:8:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Property_$12_storage_ptr",
                  "typeString": "struct RealEstateMP.Property storage pointer"
                }
              },
              "id": 23,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "330:10:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_Property_$12_storage_$dyn_storage_ptr",
                "typeString": "struct RealEstateMP.Property storage ref[] storage pointer"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 26,
            "name": "propertiesLength",
            "nodeType": "VariableDeclaration",
            "scope": 149,
            "src": "364:28:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 25,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "364:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 29,
            "name": "sales",
            "nodeType": "VariableDeclaration",
            "scope": 149,
            "src": "398:19:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_Sale_$21_storage_$dyn_storage",
              "typeString": "struct RealEstateMP.Sale storage ref[] storage ref"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 27,
                "name": "Sale",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 21,
                "src": "398:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Sale_$21_storage_ptr",
                  "typeString": "struct RealEstateMP.Sale storage pointer"
                }
              },
              "id": 28,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "398:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_Sale_$21_storage_$dyn_storage_ptr",
                "typeString": "struct RealEstateMP.Sale storage ref[] storage pointer"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 32,
            "name": "salesLength",
            "nodeType": "VariableDeclaration",
            "scope": 149,
            "src": "423:27:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 30,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "423:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30",
              "id": 31,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "449:1:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 36,
            "name": "ownerPropertiesCount",
            "nodeType": "VariableDeclaration",
            "scope": 149,
            "src": "457:53:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 35,
              "keyType": {
                "id": 33,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "466:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "457:25:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 34,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "477:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 73,
              "nodeType": "Block",
              "src": "629:228:0",
              "statements": [
                {
                  "assignments": [
                    48
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 48,
                      "name": "newProperty",
                      "nodeType": "VariableDeclaration",
                      "scope": 74,
                      "src": "639:27:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Property_$12_memory_ptr",
                        "typeString": "struct RealEstateMP.Property memory"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 47,
                        "name": "Property",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 12,
                        "src": "639:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Property_$12_storage_ptr",
                          "typeString": "struct RealEstateMP.Property storage pointer"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 57,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 50,
                        "name": "_localisation",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38,
                        "src": "678:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_calldata_ptr",
                          "typeString": "string calldata"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 51,
                        "name": "_area",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 40,
                        "src": "693:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 52,
                        "name": "_description",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42,
                        "src": "700:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_calldata_ptr",
                          "typeString": "string calldata"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 53,
                        "name": "_chamberCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44,
                        "src": "714:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 54,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 162,
                          "src": "729:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 55,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "729:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_calldata_ptr",
                          "typeString": "string calldata"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_calldata_ptr",
                          "typeString": "string calldata"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 49,
                      "name": "Property",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12,
                      "src": "669:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_Property_$12_storage_ptr_$",
                        "typeString": "type(struct RealEstateMP.Property storage pointer)"
                      }
                    },
                    "id": 56,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "669:71:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Property_$12_memory",
                      "typeString": "struct RealEstateMP.Property memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "639:101:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 61,
                        "name": "newProperty",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48,
                        "src": "766:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Property_$12_memory_ptr",
                          "typeString": "struct RealEstateMP.Property memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Property_$12_memory_ptr",
                          "typeString": "struct RealEstateMP.Property memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 58,
                        "name": "properties",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24,
                        "src": "750:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Property_$12_storage_$dyn_storage",
                          "typeString": "struct RealEstateMP.Property storage ref[] storage ref"
                        }
                      },
                      "id": 60,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "750:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Property_$12_storage_$returns$_t_uint256_$",
                        "typeString": "function (struct RealEstateMP.Property storage ref) returns (uint256)"
                      }
                    },
                    "id": 62,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "750:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 63,
                  "nodeType": "ExpressionStatement",
                  "src": "750:28:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 65,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "788:18:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "id": 64,
                      "name": "propertiesLength",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26,
                      "src": "788:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 66,
                  "nodeType": "ExpressionStatement",
                  "src": "788:18:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 71,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "816:34:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 67,
                        "name": "ownerPropertiesCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 36,
                        "src": "816:20:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 70,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 68,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 162,
                          "src": "837:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 69,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "837:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "816:32:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 72,
                  "nodeType": "ExpressionStatement",
                  "src": "816:34:0"
                }
              ]
            },
            "documentation": null,
            "id": 74,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "createProperty",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 45,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38,
                  "name": "_localisation",
                  "nodeType": "VariableDeclaration",
                  "scope": 74,
                  "src": "545:20:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string calldata"
                  },
                  "typeName": {
                    "id": 37,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "545:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 40,
                  "name": "_area",
                  "nodeType": "VariableDeclaration",
                  "scope": 74,
                  "src": "567:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 39,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "567:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 42,
                  "name": "_description",
                  "nodeType": "VariableDeclaration",
                  "scope": 74,
                  "src": "579:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string calldata"
                  },
                  "typeName": {
                    "id": 41,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "579:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 44,
                  "name": "_chamberCount",
                  "nodeType": "VariableDeclaration",
                  "scope": 74,
                  "src": "600:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 43,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "600:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "544:75:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 46,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "629:0:0"
            },
            "scope": 149,
            "src": "521:336:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 103,
              "nodeType": "Block",
              "src": "958:138:0",
              "statements": [
                {
                  "assignments": [
                    86
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 86,
                      "name": "newSale",
                      "nodeType": "VariableDeclaration",
                      "scope": 104,
                      "src": "968:19:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Sale_$21_memory_ptr",
                        "typeString": "struct RealEstateMP.Sale memory"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 85,
                        "name": "Sale",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 21,
                        "src": "968:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Sale_$21_storage_ptr",
                          "typeString": "struct RealEstateMP.Sale storage pointer"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 93,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 88,
                        "name": "_price",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 76,
                        "src": "995:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 89,
                        "name": "_sellerId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78,
                        "src": "1003:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 90,
                        "name": "_saleDate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 80,
                        "src": "1014:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 91,
                        "name": "_propertyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 82,
                        "src": "1025:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 87,
                      "name": "Sale",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21,
                      "src": "990:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_Sale_$21_storage_ptr_$",
                        "typeString": "type(struct RealEstateMP.Sale storage pointer)"
                      }
                    },
                    "id": 92,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "990:47:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Sale_$21_memory",
                      "typeString": "struct RealEstateMP.Sale memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "968:69:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 97,
                        "name": "newSale",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86,
                        "src": "1058:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Sale_$21_memory_ptr",
                          "typeString": "struct RealEstateMP.Sale memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Sale_$21_memory_ptr",
                          "typeString": "struct RealEstateMP.Sale memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 94,
                        "name": "sales",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29,
                        "src": "1047:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Sale_$21_storage_$dyn_storage",
                          "typeString": "struct RealEstateMP.Sale storage ref[] storage ref"
                        }
                      },
                      "id": 96,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1047:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Sale_$21_storage_$returns$_t_uint256_$",
                        "typeString": "function (struct RealEstateMP.Sale storage ref) returns (uint256)"
                      }
                    },
                    "id": 98,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1047:19:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 99,
                  "nodeType": "ExpressionStatement",
                  "src": "1047:19:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 101,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "1076:13:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "id": 100,
                      "name": "salesLength",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32,
                      "src": "1076:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 102,
                  "nodeType": "ExpressionStatement",
                  "src": "1076:13:0"
                }
              ]
            },
            "documentation": null,
            "id": 104,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "createSale",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 83,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 76,
                  "name": "_price",
                  "nodeType": "VariableDeclaration",
                  "scope": 104,
                  "src": "883:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 75,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "883:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 78,
                  "name": "_sellerId",
                  "nodeType": "VariableDeclaration",
                  "scope": 104,
                  "src": "896:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 77,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "896:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 80,
                  "name": "_saleDate",
                  "nodeType": "VariableDeclaration",
                  "scope": 104,
                  "src": "915:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 79,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "915:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 82,
                  "name": "_propertyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 104,
                  "src": "931:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 81,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "931:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "882:66:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 84,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "958:0:0"
            },
            "scope": 149,
            "src": "863:233:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 147,
              "nodeType": "Block",
              "src": "1146:236:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 118,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 111,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 162,
                                "src": "1169:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 112,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "value",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1169:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 110,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1164:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": "uint"
                          },
                          "id": 113,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1164:15:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 114,
                              "name": "sales",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 29,
                              "src": "1183:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_Sale_$21_storage_$dyn_storage",
                                "typeString": "struct RealEstateMP.Sale storage ref[] storage ref"
                              }
                            },
                            "id": 116,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 115,
                              "name": "_saleId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 106,
                              "src": "1189:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1183:14:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Sale_$21_storage",
                              "typeString": "struct RealEstateMP.Sale storage ref"
                            }
                          },
                          "id": 117,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "price",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 14,
                          "src": "1183:20:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1164:39:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 109,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 165,
                      "src": "1156:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 119,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1156:48:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 120,
                  "nodeType": "ExpressionStatement",
                  "src": "1156:48:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 127,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 162,
                              "src": "1252:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 128,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1252:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 126,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1247:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": "uint"
                        },
                        "id": 129,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1247:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 121,
                            "name": "sales",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29,
                            "src": "1214:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Sale_$21_storage_$dyn_storage",
                              "typeString": "struct RealEstateMP.Sale storage ref[] storage ref"
                            }
                          },
                          "id": 123,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 122,
                            "name": "_saleId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 106,
                            "src": "1220:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1214:14:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Sale_$21_storage",
                            "typeString": "struct RealEstateMP.Sale storage ref"
                          }
                        },
                        "id": 124,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sellerId",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 16,
                        "src": "1214:23:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 125,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1214:32:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 130,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1214:49:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 131,
                  "nodeType": "ExpressionStatement",
                  "src": "1214:49:0"
                },
                {
                  "assignments": [
                    133
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 133,
                      "name": "propertySelled",
                      "nodeType": "VariableDeclaration",
                      "scope": 148,
                      "src": "1273:19:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 132,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1273:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 138,
                  "initialValue": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 134,
                        "name": "sales",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29,
                        "src": "1295:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Sale_$21_storage_$dyn_storage",
                          "typeString": "struct RealEstateMP.Sale storage ref[] storage ref"
                        }
                      },
                      "id": 136,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 135,
                        "name": "_saleId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 106,
                        "src": "1301:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "1295:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Sale_$21_storage",
                        "typeString": "struct RealEstateMP.Sale storage ref"
                      }
                    },
                    "id": 137,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "propertyId",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 20,
                    "src": "1295:25:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1273:47:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 145,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 139,
                          "name": "properties",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 24,
                          "src": "1330:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Property_$12_storage_$dyn_storage",
                            "typeString": "struct RealEstateMP.Property storage ref[] storage ref"
                          }
                        },
                        "id": 141,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 140,
                          "name": "propertySelled",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 133,
                          "src": "1341:14:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1330:26:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Property_$12_storage",
                          "typeString": "struct RealEstateMP.Property storage ref"
                        }
                      },
                      "id": 142,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "owner",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11,
                      "src": "1330:32:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 143,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 162,
                        "src": "1365:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 144,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1365:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1330:45:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 146,
                  "nodeType": "ExpressionStatement",
                  "src": "1330:45:0"
                }
              ]
            },
            "documentation": null,
            "id": 148,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "buy",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 107,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 106,
                  "name": "_saleId",
                  "nodeType": "VariableDeclaration",
                  "scope": 148,
                  "src": "1115:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 105,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1115:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1114:14:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 108,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1146:0:0"
            },
            "scope": 149,
            "src": "1102:280:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 150,
        "src": "26:1358:0"
      }
    ],
    "src": "0:1410:0"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "project:/contracts/RealEstateMP.sol",
      "exportedSymbols": {
        "RealEstateMP": [
          149
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".21"
          ]
        },
        "id": 1,
        "name": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            149
          ],
          "name": "RealEstateMP",
          "scope": 150
        },
        "children": [
          {
            "attributes": {
              "canonicalName": "RealEstateMP.Property",
              "name": "Property",
              "scope": 149,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "localisation",
                  "scope": 12,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "string storage pointer",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string storage pointer"
                    },
                    "id": 2,
                    "name": "ElementaryTypeName",
                    "src": "81:6:0"
                  }
                ],
                "id": 3,
                "name": "VariableDeclaration",
                "src": "81:19:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "area",
                  "scope": 12,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 4,
                    "name": "ElementaryTypeName",
                    "src": "110:4:0"
                  }
                ],
                "id": 5,
                "name": "VariableDeclaration",
                "src": "110:9:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "description",
                  "scope": 12,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "string storage pointer",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string storage pointer"
                    },
                    "id": 6,
                    "name": "ElementaryTypeName",
                    "src": "129:6:0"
                  }
                ],
                "id": 7,
                "name": "VariableDeclaration",
                "src": "129:18:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "chamberCount",
                  "scope": 12,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 8,
                    "name": "ElementaryTypeName",
                    "src": "157:4:0"
                  }
                ],
                "id": 9,
                "name": "VariableDeclaration",
                "src": "157:17:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "owner",
                  "scope": 12,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "address",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 10,
                    "name": "ElementaryTypeName",
                    "src": "184:7:0"
                  }
                ],
                "id": 11,
                "name": "VariableDeclaration",
                "src": "184:13:0"
              }
            ],
            "id": 12,
            "name": "StructDefinition",
            "src": "55:149:0"
          },
          {
            "attributes": {
              "canonicalName": "RealEstateMP.Sale",
              "name": "Sale",
              "scope": 149,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "price",
                  "scope": 21,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 13,
                    "name": "ElementaryTypeName",
                    "src": "232:4:0"
                  }
                ],
                "id": 14,
                "name": "VariableDeclaration",
                "src": "232:10:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "sellerId",
                  "scope": 21,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "address",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 15,
                    "name": "ElementaryTypeName",
                    "src": "252:7:0"
                  }
                ],
                "id": 16,
                "name": "VariableDeclaration",
                "src": "252:16:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "saleDate",
                  "scope": 21,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 17,
                    "name": "ElementaryTypeName",
                    "src": "278:4:0"
                  }
                ],
                "id": 18,
                "name": "VariableDeclaration",
                "src": "278:13:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "propertyId",
                  "scope": 21,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 19,
                    "name": "ElementaryTypeName",
                    "src": "301:4:0"
                  }
                ],
                "id": 20,
                "name": "VariableDeclaration",
                "src": "301:15:0"
              }
            ],
            "id": 21,
            "name": "StructDefinition",
            "src": "210:113:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "properties",
              "scope": 149,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "struct RealEstateMP.Property storage ref[] storage ref",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "length": null,
                  "type": "struct RealEstateMP.Property storage ref[] storage pointer"
                },
                "children": [
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "Property",
                      "referencedDeclaration": 12,
                      "type": "struct RealEstateMP.Property storage pointer"
                    },
                    "id": 22,
                    "name": "UserDefinedTypeName",
                    "src": "330:8:0"
                  }
                ],
                "id": 23,
                "name": "ArrayTypeName",
                "src": "330:10:0"
              }
            ],
            "id": 24,
            "name": "VariableDeclaration",
            "src": "330:28:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "propertiesLength",
              "scope": 149,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 25,
                "name": "ElementaryTypeName",
                "src": "364:4:0"
              }
            ],
            "id": 26,
            "name": "VariableDeclaration",
            "src": "364:28:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "sales",
              "scope": 149,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "struct RealEstateMP.Sale storage ref[] storage ref",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "length": null,
                  "type": "struct RealEstateMP.Sale storage ref[] storage pointer"
                },
                "children": [
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "Sale",
                      "referencedDeclaration": 21,
                      "type": "struct RealEstateMP.Sale storage pointer"
                    },
                    "id": 27,
                    "name": "UserDefinedTypeName",
                    "src": "398:4:0"
                  }
                ],
                "id": 28,
                "name": "ArrayTypeName",
                "src": "398:6:0"
              }
            ],
            "id": 29,
            "name": "VariableDeclaration",
            "src": "398:19:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "salesLength",
              "scope": 149,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 30,
                "name": "ElementaryTypeName",
                "src": "423:4:0"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "30",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "number",
                  "type": "int_const 0",
                  "value": "0"
                },
                "id": 31,
                "name": "Literal",
                "src": "449:1:0"
              }
            ],
            "id": 32,
            "name": "VariableDeclaration",
            "src": "423:27:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "ownerPropertiesCount",
              "scope": 149,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(address => uint256)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(address => uint256)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 33,
                    "name": "ElementaryTypeName",
                    "src": "466:7:0"
                  },
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 34,
                    "name": "ElementaryTypeName",
                    "src": "477:4:0"
                  }
                ],
                "id": 35,
                "name": "Mapping",
                "src": "457:25:0"
              }
            ],
            "id": 36,
            "name": "VariableDeclaration",
            "src": "457:53:0"
          },
          {
            "attributes": {
              "constant": false,
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "createProperty",
              "payable": false,
              "scope": 149,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "external"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_localisation",
                      "scope": 74,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string calldata",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 37,
                        "name": "ElementaryTypeName",
                        "src": "545:6:0"
                      }
                    ],
                    "id": 38,
                    "name": "VariableDeclaration",
                    "src": "545:20:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_area",
                      "scope": 74,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 39,
                        "name": "ElementaryTypeName",
                        "src": "567:4:0"
                      }
                    ],
                    "id": 40,
                    "name": "VariableDeclaration",
                    "src": "567:10:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_description",
                      "scope": 74,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string calldata",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 41,
                        "name": "ElementaryTypeName",
                        "src": "579:6:0"
                      }
                    ],
                    "id": 42,
                    "name": "VariableDeclaration",
                    "src": "579:19:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_chamberCount",
                      "scope": 74,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 43,
                        "name": "ElementaryTypeName",
                        "src": "600:4:0"
                      }
                    ],
                    "id": 44,
                    "name": "VariableDeclaration",
                    "src": "600:18:0"
                  }
                ],
                "id": 45,
                "name": "ParameterList",
                "src": "544:75:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 46,
                "name": "ParameterList",
                "src": "629:0:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        48
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "newProperty",
                          "scope": 74,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "struct RealEstateMP.Property memory",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "Property",
                              "referencedDeclaration": 12,
                              "type": "struct RealEstateMP.Property storage pointer"
                            },
                            "id": 47,
                            "name": "UserDefinedTypeName",
                            "src": "639:8:0"
                          }
                        ],
                        "id": 48,
                        "name": "VariableDeclaration",
                        "src": "639:27:0"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": true,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "struct RealEstateMP.Property memory",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_calldata_ptr",
                                  "typeString": "string calldata"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_string_calldata_ptr",
                                  "typeString": "string calldata"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 12,
                              "type": "type(struct RealEstateMP.Property storage pointer)",
                              "value": "Property"
                            },
                            "id": 49,
                            "name": "Identifier",
                            "src": "669:8:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 38,
                              "type": "string calldata",
                              "value": "_localisation"
                            },
                            "id": 50,
                            "name": "Identifier",
                            "src": "678:13:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 40,
                              "type": "uint256",
                              "value": "_area"
                            },
                            "id": 51,
                            "name": "Identifier",
                            "src": "693:5:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 42,
                              "type": "string calldata",
                              "value": "_description"
                            },
                            "id": 52,
                            "name": "Identifier",
                            "src": "700:12:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 44,
                              "type": "uint256",
                              "value": "_chamberCount"
                            },
                            "id": 53,
                            "name": "Identifier",
                            "src": "714:13:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 162,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 54,
                                "name": "Identifier",
                                "src": "729:3:0"
                              }
                            ],
                            "id": 55,
                            "name": "MemberAccess",
                            "src": "729:10:0"
                          }
                        ],
                        "id": 56,
                        "name": "FunctionCall",
                        "src": "669:71:0"
                      }
                    ],
                    "id": 57,
                    "name": "VariableDeclarationStatement",
                    "src": "639:101:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_Property_$12_memory_ptr",
                                  "typeString": "struct RealEstateMP.Property memory"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "push",
                              "referencedDeclaration": null,
                              "type": "function (struct RealEstateMP.Property storage ref) returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 24,
                                  "type": "struct RealEstateMP.Property storage ref[] storage ref",
                                  "value": "properties"
                                },
                                "id": 58,
                                "name": "Identifier",
                                "src": "750:10:0"
                              }
                            ],
                            "id": 60,
                            "name": "MemberAccess",
                            "src": "750:15:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 48,
                              "type": "struct RealEstateMP.Property memory",
                              "value": "newProperty"
                            },
                            "id": 61,
                            "name": "Identifier",
                            "src": "766:11:0"
                          }
                        ],
                        "id": 62,
                        "name": "FunctionCall",
                        "src": "750:28:0"
                      }
                    ],
                    "id": 63,
                    "name": "ExpressionStatement",
                    "src": "750:28:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "++",
                          "prefix": false,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 26,
                              "type": "uint256",
                              "value": "propertiesLength"
                            },
                            "id": 64,
                            "name": "Identifier",
                            "src": "788:16:0"
                          }
                        ],
                        "id": 65,
                        "name": "UnaryOperation",
                        "src": "788:18:0"
                      }
                    ],
                    "id": 66,
                    "name": "ExpressionStatement",
                    "src": "788:18:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "++",
                          "prefix": false,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 36,
                                  "type": "mapping(address => uint256)",
                                  "value": "ownerPropertiesCount"
                                },
                                "id": 67,
                                "name": "Identifier",
                                "src": "816:20:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 162,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 68,
                                    "name": "Identifier",
                                    "src": "837:3:0"
                                  }
                                ],
                                "id": 69,
                                "name": "MemberAccess",
                                "src": "837:10:0"
                              }
                            ],
                            "id": 70,
                            "name": "IndexAccess",
                            "src": "816:32:0"
                          }
                        ],
                        "id": 71,
                        "name": "UnaryOperation",
                        "src": "816:34:0"
                      }
                    ],
                    "id": 72,
                    "name": "ExpressionStatement",
                    "src": "816:34:0"
                  }
                ],
                "id": 73,
                "name": "Block",
                "src": "629:228:0"
              }
            ],
            "id": 74,
            "name": "FunctionDefinition",
            "src": "521:336:0"
          },
          {
            "attributes": {
              "constant": false,
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "createSale",
              "payable": false,
              "scope": 149,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "external"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_price",
                      "scope": 104,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 75,
                        "name": "ElementaryTypeName",
                        "src": "883:4:0"
                      }
                    ],
                    "id": 76,
                    "name": "VariableDeclaration",
                    "src": "883:11:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_sellerId",
                      "scope": 104,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 77,
                        "name": "ElementaryTypeName",
                        "src": "896:7:0"
                      }
                    ],
                    "id": 78,
                    "name": "VariableDeclaration",
                    "src": "896:17:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_saleDate",
                      "scope": 104,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 79,
                        "name": "ElementaryTypeName",
                        "src": "915:4:0"
                      }
                    ],
                    "id": 80,
                    "name": "VariableDeclaration",
                    "src": "915:14:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_propertyId",
                      "scope": 104,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 81,
                        "name": "ElementaryTypeName",
                        "src": "931:4:0"
                      }
                    ],
                    "id": 82,
                    "name": "VariableDeclaration",
                    "src": "931:16:0"
                  }
                ],
                "id": 83,
                "name": "ParameterList",
                "src": "882:66:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 84,
                "name": "ParameterList",
                "src": "958:0:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        86
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "newSale",
                          "scope": 104,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "struct RealEstateMP.Sale memory",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "Sale",
                              "referencedDeclaration": 21,
                              "type": "struct RealEstateMP.Sale storage pointer"
                            },
                            "id": 85,
                            "name": "UserDefinedTypeName",
                            "src": "968:4:0"
                          }
                        ],
                        "id": 86,
                        "name": "VariableDeclaration",
                        "src": "968:19:0"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": true,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "struct RealEstateMP.Sale memory",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 21,
                              "type": "type(struct RealEstateMP.Sale storage pointer)",
                              "value": "Sale"
                            },
                            "id": 87,
                            "name": "Identifier",
                            "src": "990:4:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 76,
                              "type": "uint256",
                              "value": "_price"
                            },
                            "id": 88,
                            "name": "Identifier",
                            "src": "995:6:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 78,
                              "type": "address",
                              "value": "_sellerId"
                            },
                            "id": 89,
                            "name": "Identifier",
                            "src": "1003:9:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 80,
                              "type": "uint256",
                              "value": "_saleDate"
                            },
                            "id": 90,
                            "name": "Identifier",
                            "src": "1014:9:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 82,
                              "type": "uint256",
                              "value": "_propertyId"
                            },
                            "id": 91,
                            "name": "Identifier",
                            "src": "1025:11:0"
                          }
                        ],
                        "id": 92,
                        "name": "FunctionCall",
                        "src": "990:47:0"
                      }
                    ],
                    "id": 93,
                    "name": "VariableDeclarationStatement",
                    "src": "968:69:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_Sale_$21_memory_ptr",
                                  "typeString": "struct RealEstateMP.Sale memory"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "push",
                              "referencedDeclaration": null,
                              "type": "function (struct RealEstateMP.Sale storage ref) returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 29,
                                  "type": "struct RealEstateMP.Sale storage ref[] storage ref",
                                  "value": "sales"
                                },
                                "id": 94,
                                "name": "Identifier",
                                "src": "1047:5:0"
                              }
                            ],
                            "id": 96,
                            "name": "MemberAccess",
                            "src": "1047:10:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 86,
                              "type": "struct RealEstateMP.Sale memory",
                              "value": "newSale"
                            },
                            "id": 97,
                            "name": "Identifier",
                            "src": "1058:7:0"
                          }
                        ],
                        "id": 98,
                        "name": "FunctionCall",
                        "src": "1047:19:0"
                      }
                    ],
                    "id": 99,
                    "name": "ExpressionStatement",
                    "src": "1047:19:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "++",
                          "prefix": false,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 32,
                              "type": "uint256",
                              "value": "salesLength"
                            },
                            "id": 100,
                            "name": "Identifier",
                            "src": "1076:11:0"
                          }
                        ],
                        "id": 101,
                        "name": "UnaryOperation",
                        "src": "1076:13:0"
                      }
                    ],
                    "id": 102,
                    "name": "ExpressionStatement",
                    "src": "1076:13:0"
                  }
                ],
                "id": 103,
                "name": "Block",
                "src": "958:138:0"
              }
            ],
            "id": 104,
            "name": "FunctionDefinition",
            "src": "863:233:0"
          },
          {
            "attributes": {
              "constant": false,
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "buy",
              "payable": true,
              "scope": 149,
              "stateMutability": "payable",
              "superFunction": null,
              "visibility": "external"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_saleId",
                      "scope": 148,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 105,
                        "name": "ElementaryTypeName",
                        "src": "1115:4:0"
                      }
                    ],
                    "id": 106,
                    "name": "VariableDeclaration",
                    "src": "1115:12:0"
                  }
                ],
                "id": 107,
                "name": "ParameterList",
                "src": "1114:14:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 108,
                "name": "ParameterList",
                "src": "1146:0:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 165,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 109,
                            "name": "Identifier",
                            "src": "1156:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "uint256",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(uint256)",
                                      "value": "uint"
                                    },
                                    "id": 110,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "1164:4:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "value",
                                      "referencedDeclaration": null,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 162,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 111,
                                        "name": "Identifier",
                                        "src": "1169:3:0"
                                      }
                                    ],
                                    "id": 112,
                                    "name": "MemberAccess",
                                    "src": "1169:9:0"
                                  }
                                ],
                                "id": 113,
                                "name": "FunctionCall",
                                "src": "1164:15:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "price",
                                  "referencedDeclaration": 14,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "struct RealEstateMP.Sale storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 29,
                                          "type": "struct RealEstateMP.Sale storage ref[] storage ref",
                                          "value": "sales"
                                        },
                                        "id": 114,
                                        "name": "Identifier",
                                        "src": "1183:5:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 106,
                                          "type": "uint256",
                                          "value": "_saleId"
                                        },
                                        "id": 115,
                                        "name": "Identifier",
                                        "src": "1189:7:0"
                                      }
                                    ],
                                    "id": 116,
                                    "name": "IndexAccess",
                                    "src": "1183:14:0"
                                  }
                                ],
                                "id": 117,
                                "name": "MemberAccess",
                                "src": "1183:20:0"
                              }
                            ],
                            "id": 118,
                            "name": "BinaryOperation",
                            "src": "1164:39:0"
                          }
                        ],
                        "id": 119,
                        "name": "FunctionCall",
                        "src": "1156:48:0"
                      }
                    ],
                    "id": 120,
                    "name": "ExpressionStatement",
                    "src": "1156:48:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "transfer",
                              "referencedDeclaration": null,
                              "type": "function (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sellerId",
                                  "referencedDeclaration": 16,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "struct RealEstateMP.Sale storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 29,
                                          "type": "struct RealEstateMP.Sale storage ref[] storage ref",
                                          "value": "sales"
                                        },
                                        "id": 121,
                                        "name": "Identifier",
                                        "src": "1214:5:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 106,
                                          "type": "uint256",
                                          "value": "_saleId"
                                        },
                                        "id": 122,
                                        "name": "Identifier",
                                        "src": "1220:7:0"
                                      }
                                    ],
                                    "id": 123,
                                    "name": "IndexAccess",
                                    "src": "1214:14:0"
                                  }
                                ],
                                "id": 124,
                                "name": "MemberAccess",
                                "src": "1214:23:0"
                              }
                            ],
                            "id": 125,
                            "name": "MemberAccess",
                            "src": "1214:32:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(uint256)",
                                  "value": "uint"
                                },
                                "id": 126,
                                "name": "ElementaryTypeNameExpression",
                                "src": "1247:4:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "value",
                                  "referencedDeclaration": null,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 162,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 127,
                                    "name": "Identifier",
                                    "src": "1252:3:0"
                                  }
                                ],
                                "id": 128,
                                "name": "MemberAccess",
                                "src": "1252:9:0"
                              }
                            ],
                            "id": 129,
                            "name": "FunctionCall",
                            "src": "1247:15:0"
                          }
                        ],
                        "id": 130,
                        "name": "FunctionCall",
                        "src": "1214:49:0"
                      }
                    ],
                    "id": 131,
                    "name": "ExpressionStatement",
                    "src": "1214:49:0"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        133
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "propertySelled",
                          "scope": 148,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 132,
                            "name": "ElementaryTypeName",
                            "src": "1273:4:0"
                          }
                        ],
                        "id": 133,
                        "name": "VariableDeclaration",
                        "src": "1273:19:0"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "member_name": "propertyId",
                          "referencedDeclaration": 20,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "struct RealEstateMP.Sale storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 29,
                                  "type": "struct RealEstateMP.Sale storage ref[] storage ref",
                                  "value": "sales"
                                },
                                "id": 134,
                                "name": "Identifier",
                                "src": "1295:5:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 106,
                                  "type": "uint256",
                                  "value": "_saleId"
                                },
                                "id": 135,
                                "name": "Identifier",
                                "src": "1301:7:0"
                              }
                            ],
                            "id": 136,
                            "name": "IndexAccess",
                            "src": "1295:14:0"
                          }
                        ],
                        "id": 137,
                        "name": "MemberAccess",
                        "src": "1295:25:0"
                      }
                    ],
                    "id": 138,
                    "name": "VariableDeclarationStatement",
                    "src": "1273:47:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "member_name": "owner",
                              "referencedDeclaration": 11,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct RealEstateMP.Property storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 24,
                                      "type": "struct RealEstateMP.Property storage ref[] storage ref",
                                      "value": "properties"
                                    },
                                    "id": 139,
                                    "name": "Identifier",
                                    "src": "1330:10:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 133,
                                      "type": "uint256",
                                      "value": "propertySelled"
                                    },
                                    "id": 140,
                                    "name": "Identifier",
                                    "src": "1341:14:0"
                                  }
                                ],
                                "id": 141,
                                "name": "IndexAccess",
                                "src": "1330:26:0"
                              }
                            ],
                            "id": 142,
                            "name": "MemberAccess",
                            "src": "1330:32:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 162,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 143,
                                "name": "Identifier",
                                "src": "1365:3:0"
                              }
                            ],
                            "id": 144,
                            "name": "MemberAccess",
                            "src": "1365:10:0"
                          }
                        ],
                        "id": 145,
                        "name": "Assignment",
                        "src": "1330:45:0"
                      }
                    ],
                    "id": 146,
                    "name": "ExpressionStatement",
                    "src": "1330:45:0"
                  }
                ],
                "id": 147,
                "name": "Block",
                "src": "1146:236:0"
              }
            ],
            "id": 148,
            "name": "FunctionDefinition",
            "src": "1102:280:0"
          }
        ],
        "id": 149,
        "name": "ContractDefinition",
        "src": "26:1358:0"
      }
    ],
    "id": 150,
    "name": "SourceUnit",
    "src": "0:1410:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.21+commit.dfe3193c.Emscripten.clang"
  },
  "networks": {
    "4": {
      "events": {},
      "links": {},
      "address": "0x4559dF36c003f50254e261321c2a5a55846aC09a",
      "transactionHash": "0x68c28929fb5f03fadf8c249953d8872415a03458ad8a45c696c46b58435e3db1"
    }
  },
  "schemaVersion": "3.4.7",
  "updatedAt": "2022-04-15T12:42:25.675Z",
  "networkType": "ethereum",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}