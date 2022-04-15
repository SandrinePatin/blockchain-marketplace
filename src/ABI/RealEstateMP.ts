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
    "metadata": "{\"compiler\":{\"version\":\"0.4.21+commit.dfe3193c\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"ownerPropertiesCount\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"salesLength\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_price\",\"type\":\"uint256\"},{\"name\":\"_sellerId\",\"type\":\"address\"},{\"name\":\"_saleDate\",\"type\":\"uint256\"},{\"name\":\"_propertyId\",\"type\":\"uint256\"}],\"name\":\"createSale\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"sales\",\"outputs\":[{\"name\":\"price\",\"type\":\"uint256\"},{\"name\":\"sellerId\",\"type\":\"address\"},{\"name\":\"saleDate\",\"type\":\"uint256\"},{\"name\":\"propertyId\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_localisation\",\"type\":\"string\"},{\"name\":\"_area\",\"type\":\"uint256\"},{\"name\":\"_description\",\"type\":\"string\"},{\"name\":\"_chamberCount\",\"type\":\"uint256\"}],\"name\":\"createProperty\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_saleId\",\"type\":\"uint256\"}],\"name\":\"buy\",\"outputs\":[],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"properties\",\"outputs\":[{\"name\":\"localisation\",\"type\":\"string\"},{\"name\":\"area\",\"type\":\"uint256\"},{\"name\":\"description\",\"type\":\"string\"},{\"name\":\"chamberCount\",\"type\":\"uint256\"},{\"name\":\"owner\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"project:/contracts/RealEstateMP.sol\":\"RealEstateMP\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/RealEstateMP.sol\":{\"keccak256\":\"0x7e3d7f4757e5990f762f46f30d491341e39140ccef79de4a386bc54aa9cccc80\",\"urls\":[\"bzzr://c7f1e2e2494bf53d9236e9e38449b58bd2f5ce1d842c5a567319a976f9590bb2\"]}},\"version\":1}",
    "bytecode": "0x60606040526000600255341561001457600080fd5b610c71806100236000396000f300606060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063110a41ca1461008857806313324e9c146100d557806356c9ef64146100fe578063b5f522f714610152578063c4294d6b146101ca578063d96a094a1461021e578063f7b1080814610236575b600080fd5b341561009357600080fd5b6100bf600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061037f565b6040518082815260200191505060405180910390f35b34156100e057600080fd5b6100e8610397565b6040518082815260200191505060405180910390f35b341561010957600080fd5b610150600480803590602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001909190505061039d565b005b341561015d57600080fd5b610173600480803590602001909190505061048a565b604051808581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182815260200194505050505060405180910390f35b34156101d557600080fd5b61021c6004808035906020019082018035906020019190919290803590602001909190803590602001908201803590602001919091929080359060200190919050506104e9565b005b61023460048080359060200190919050506106af565b005b341561024157600080fd5b61025760048080359060200190919050506107e6565b6040518080602001868152602001806020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838103835288818151815260200191508051906020019080838360005b838110156102d95780820151818401526020810190506102be565b50505050905090810190601f1680156103065780820380516001836020036101000a031916815260200191505b50838103825286818151815260200191508051906020019080838360005b8381101561033f578082015181840152602081019050610324565b50505050905090810190601f16801561036c5780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b60036020528060005260406000206000915090505481565b60025481565b6103a561097b565b6080604051908101604052808681526020018573ffffffffffffffffffffffffffffffffffffffff168152602001848152602001838152509050600180548060010182816103f391906109ba565b916000526020600020906004020160008390919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301555050506002600081548092919060010191905055505050505050565b60018181548110151561049957fe5b90600052602060002090600402016000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030154905084565b6104f16109ec565b60a06040519081016040528088888080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050815260200186815260200185858080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505081526020018381526020013373ffffffffffffffffffffffffffffffffffffffff168152509050600080548060010182816105a99190610a3e565b9160005260206000209060050201600083909190915060008201518160000190805190602001906105db929190610a70565b50602082015181600101556040820151816002019080519060200190610602929190610a70565b506060820151816003015560808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050555050505050505050565b60006001828154811015156106c057fe5b90600052602060002090600402016000015434101515156106e057600080fd5b6001828154811015156106ef57fe5b906000526020600020906004020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050151561076057600080fd5b60018281548110151561076f57fe5b90600052602060002090600402016003015490503360008281548110151561079357fe5b906000526020600020906005020160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b6000818154811015156107f557fe5b9060005260206000209060050201600091509050806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108a15780601f10610876576101008083540402835291602001916108a1565b820191906000526020600020905b81548152906001019060200180831161088457829003601f168201915b505050505090806001015490806002018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109455780601f1061091a57610100808354040283529160200191610945565b820191906000526020600020905b81548152906001019060200180831161092857829003601f168201915b5050505050908060030154908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905085565b60806040519081016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081525090565b8154818355818115116109e7576004028160040283600052602060002091820191016109e69190610af0565b5b505050565b60a060405190810160405280610a00610b4e565b815260200160008152602001610a14610b4e565b815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b815481835581811511610a6b57600502816005028360005260206000209182019101610a6a9190610b62565b5b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610ab157805160ff1916838001178555610adf565b82800160010185558215610adf579182015b82811115610ade578251825591602001919060010190610ac3565b5b509050610aec9190610bd8565b5090565b610b4b91905b80821115610b47576000808201600090556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556002820160009055600382016000905550600401610af6565b5090565b90565b602060405190810160405280600081525090565b610bd591905b80821115610bd15760008082016000610b819190610bfd565b6001820160009055600282016000610b999190610bfd565b60038201600090556004820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905550600501610b68565b5090565b90565b610bfa91905b80821115610bf6576000816000905550600101610bde565b5090565b90565b50805460018160011615610100020316600290046000825580601f10610c235750610c42565b601f016020900490600052602060002090810190610c419190610bd8565b5b505600a165627a7a723058201261c264e93308e2c308ac959d0d4c47981d712981610f291fe7c4cfc606d2390029",
    "deployedBytecode": "0x606060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063110a41ca1461008857806313324e9c146100d557806356c9ef64146100fe578063b5f522f714610152578063c4294d6b146101ca578063d96a094a1461021e578063f7b1080814610236575b600080fd5b341561009357600080fd5b6100bf600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061037f565b6040518082815260200191505060405180910390f35b34156100e057600080fd5b6100e8610397565b6040518082815260200191505060405180910390f35b341561010957600080fd5b610150600480803590602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001909190505061039d565b005b341561015d57600080fd5b610173600480803590602001909190505061048a565b604051808581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182815260200194505050505060405180910390f35b34156101d557600080fd5b61021c6004808035906020019082018035906020019190919290803590602001909190803590602001908201803590602001919091929080359060200190919050506104e9565b005b61023460048080359060200190919050506106af565b005b341561024157600080fd5b61025760048080359060200190919050506107e6565b6040518080602001868152602001806020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838103835288818151815260200191508051906020019080838360005b838110156102d95780820151818401526020810190506102be565b50505050905090810190601f1680156103065780820380516001836020036101000a031916815260200191505b50838103825286818151815260200191508051906020019080838360005b8381101561033f578082015181840152602081019050610324565b50505050905090810190601f16801561036c5780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b60036020528060005260406000206000915090505481565b60025481565b6103a561097b565b6080604051908101604052808681526020018573ffffffffffffffffffffffffffffffffffffffff168152602001848152602001838152509050600180548060010182816103f391906109ba565b916000526020600020906004020160008390919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301555050506002600081548092919060010191905055505050505050565b60018181548110151561049957fe5b90600052602060002090600402016000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030154905084565b6104f16109ec565b60a06040519081016040528088888080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050815260200186815260200185858080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505081526020018381526020013373ffffffffffffffffffffffffffffffffffffffff168152509050600080548060010182816105a99190610a3e565b9160005260206000209060050201600083909190915060008201518160000190805190602001906105db929190610a70565b50602082015181600101556040820151816002019080519060200190610602929190610a70565b506060820151816003015560808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050555050505050505050565b60006001828154811015156106c057fe5b90600052602060002090600402016000015434101515156106e057600080fd5b6001828154811015156106ef57fe5b906000526020600020906004020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050151561076057600080fd5b60018281548110151561076f57fe5b90600052602060002090600402016003015490503360008281548110151561079357fe5b906000526020600020906005020160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b6000818154811015156107f557fe5b9060005260206000209060050201600091509050806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108a15780601f10610876576101008083540402835291602001916108a1565b820191906000526020600020905b81548152906001019060200180831161088457829003601f168201915b505050505090806001015490806002018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109455780601f1061091a57610100808354040283529160200191610945565b820191906000526020600020905b81548152906001019060200180831161092857829003601f168201915b5050505050908060030154908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905085565b60806040519081016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081525090565b8154818355818115116109e7576004028160040283600052602060002091820191016109e69190610af0565b5b505050565b60a060405190810160405280610a00610b4e565b815260200160008152602001610a14610b4e565b815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b815481835581811511610a6b57600502816005028360005260206000209182019101610a6a9190610b62565b5b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610ab157805160ff1916838001178555610adf565b82800160010185558215610adf579182015b82811115610ade578251825591602001919060010190610ac3565b5b509050610aec9190610bd8565b5090565b610b4b91905b80821115610b47576000808201600090556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556002820160009055600382016000905550600401610af6565b5090565b90565b602060405190810160405280600081525090565b610bd591905b80821115610bd15760008082016000610b819190610bfd565b6001820160009055600282016000610b999190610bfd565b60038201600090556004820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905550600501610b68565b5090565b90565b610bfa91905b80821115610bf6576000816000905550600101610bde565b5090565b90565b50805460018160011615610100020316600290046000825580601f10610c235750610c42565b601f016020900490600052602060002090810190610c419190610bd8565b5b505600a165627a7a723058201261c264e93308e2c308ac959d0d4c47981d712981610f291fe7c4cfc606d2390029",
    "sourceMap": "26:1296:1:-;;;415:1;389:27;;26:1296;;;;;;;;;;;;;;",
    "deployedSourceMap": "26:1296:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;423:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;389:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;801:233;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;364:19;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;487:308;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1040:280;;;;;;;;;;;;;;;;;;330:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;330:28:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;330:28:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;423:53;;;;;;;;;;;;;;;;;:::o;389:27::-;;;;:::o;801:233::-;906:19;;:::i;:::-;928:47;;;;;;;;;933:6;928:47;;;;941:9;928:47;;;;;;952:9;928:47;;;;963:11;928:47;;;906:69;;985:5;:19;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;996:7;985:19;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1014:11;;:13;;;;;;;;;;;;;801:233;;;;;:::o;364:19::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;487:308::-;605:27;;:::i;:::-;635:71;;;;;;;;;644:13;;635:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;659:5;635:71;;;;666:12;;635:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;680:13;635:71;;;;695:10;635:71;;;;;605:101;;716:10;:28;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;732:11;716:28;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;754:20;:32;775:10;754:32;;;;;;;;;;;;;;;;:34;;;;;;;;;;;;;487:308;;;;;;;:::o;1040:280::-;1211:19;1121:5;1127:7;1121:14;;;;;;;;;;;;;;;;;;;;:20;;;1107:9;1102:39;;1094:48;;;;;;;;1152:5;1158:7;1152:14;;;;;;;;;;;;;;;;;;;;:23;;;;;;;;;;;;:32;;:49;1190:9;1152:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1233:5;1239:7;1233:14;;;;;;;;;;;;;;;;;;;;:25;;;1211:47;;1303:10;1268;1279:14;1268:26;;;;;;;;;;;;;;;;;;;;:32;;;:45;;;;;;;;;;;;;;;;;;1040:280;;:::o;330:28::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;26:1296::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o",
    "source": "pragma solidity ^0.4.21;\n\ncontract RealEstateMP {\n\n    struct Property {\n        string localisation;\n        uint area;\n        string description;\n        uint chamberCount;\n        address owner;\n    }\n\n    struct Sale {\n        uint price;\n        address sellerId;\n        uint saleDate;\n        uint propertyId;\n    }\n\n\n    Property[] public properties;\n    Sale[] public sales;\n    uint public salesLength = 0;\n\n    mapping (address => uint) public ownerPropertiesCount;    \n\n    function createProperty(string _localisation, uint _area, string _description, uint _chamberCount) external {\n        Property memory newProperty = Property(_localisation, _area, _description, _chamberCount, msg.sender);\n        properties.push(newProperty);\n        ownerPropertiesCount[msg.sender]++;\n    }\n\n    function createSale(uint _price, address _sellerId, uint _saleDate, uint _propertyId) external {\n        Sale memory newSale = Sale(_price, _sellerId, _saleDate, _propertyId);\n        sales.push(newSale);\n        salesLength++;\n    }\n\n    function buy(uint _saleId) external payable {\n        require(uint(msg.value) >= sales[_saleId].price);\n        sales[_saleId].sellerId.transfer(uint(msg.value));\n        uint propertySelled = sales[_saleId].propertyId;\n        properties[propertySelled].owner = msg.sender;\n    }\n}",
    "sourcePath": "/Users/sokaii/Documents/ESGI/5MOC/Blockchain/RealEstateMP/contracts/RealEstateMP.sol",
    "ast": {
      "absolutePath": "project:/contracts/RealEstateMP.sol",
      "exportedSymbols": {
        "RealEstateMP": [
          201
        ]
      },
      "id": 202,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 58,
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".21"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:24:1"
        },
        {
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 201,
          "linearizedBaseContracts": [
            201
          ],
          "name": "RealEstateMP",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "canonicalName": "RealEstateMP.Property",
              "id": 69,
              "members": [
                {
                  "constant": false,
                  "id": 60,
                  "name": "localisation",
                  "nodeType": "VariableDeclaration",
                  "scope": 69,
                  "src": "81:19:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string storage pointer"
                  },
                  "typeName": {
                    "id": 59,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "81:6:1",
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
                  "id": 62,
                  "name": "area",
                  "nodeType": "VariableDeclaration",
                  "scope": 69,
                  "src": "110:9:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "110:4:1",
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
                  "id": 64,
                  "name": "description",
                  "nodeType": "VariableDeclaration",
                  "scope": 69,
                  "src": "129:18:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string storage pointer"
                  },
                  "typeName": {
                    "id": 63,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "129:6:1",
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
                  "id": 66,
                  "name": "chamberCount",
                  "nodeType": "VariableDeclaration",
                  "scope": 69,
                  "src": "157:17:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 65,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "157:4:1",
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
                  "id": 68,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 69,
                  "src": "184:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 67,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "184:7:1",
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
              "scope": 201,
              "src": "55:149:1",
              "visibility": "public"
            },
            {
              "canonicalName": "RealEstateMP.Sale",
              "id": 78,
              "members": [
                {
                  "constant": false,
                  "id": 71,
                  "name": "price",
                  "nodeType": "VariableDeclaration",
                  "scope": 78,
                  "src": "232:10:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 70,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "232:4:1",
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
                  "id": 73,
                  "name": "sellerId",
                  "nodeType": "VariableDeclaration",
                  "scope": 78,
                  "src": "252:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 72,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "252:7:1",
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
                  "id": 75,
                  "name": "saleDate",
                  "nodeType": "VariableDeclaration",
                  "scope": 78,
                  "src": "278:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 74,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "278:4:1",
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
                  "id": 77,
                  "name": "propertyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 78,
                  "src": "301:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 76,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "301:4:1",
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
              "scope": 201,
              "src": "210:113:1",
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 81,
              "name": "properties",
              "nodeType": "VariableDeclaration",
              "scope": 201,
              "src": "330:28:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_Property_$69_storage_$dyn_storage",
                "typeString": "struct RealEstateMP.Property storage ref[] storage ref"
              },
              "typeName": {
                "baseType": {
                  "contractScope": null,
                  "id": 79,
                  "name": "Property",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 69,
                  "src": "330:8:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Property_$69_storage_ptr",
                    "typeString": "struct RealEstateMP.Property storage pointer"
                  }
                },
                "id": 80,
                "length": null,
                "nodeType": "ArrayTypeName",
                "src": "330:10:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_struct$_Property_$69_storage_$dyn_storage_ptr",
                  "typeString": "struct RealEstateMP.Property storage ref[] storage pointer"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 84,
              "name": "sales",
              "nodeType": "VariableDeclaration",
              "scope": 201,
              "src": "364:19:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_Sale_$78_storage_$dyn_storage",
                "typeString": "struct RealEstateMP.Sale storage ref[] storage ref"
              },
              "typeName": {
                "baseType": {
                  "contractScope": null,
                  "id": 82,
                  "name": "Sale",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 78,
                  "src": "364:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Sale_$78_storage_ptr",
                    "typeString": "struct RealEstateMP.Sale storage pointer"
                  }
                },
                "id": 83,
                "length": null,
                "nodeType": "ArrayTypeName",
                "src": "364:6:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_struct$_Sale_$78_storage_$dyn_storage_ptr",
                  "typeString": "struct RealEstateMP.Sale storage ref[] storage pointer"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 87,
              "name": "salesLength",
              "nodeType": "VariableDeclaration",
              "scope": 201,
              "src": "389:27:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 85,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "389:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": {
                "argumentTypes": null,
                "hexValue": "30",
                "id": 86,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "415:1:1",
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
              "id": 91,
              "name": "ownerPropertiesCount",
              "nodeType": "VariableDeclaration",
              "scope": 201,
              "src": "423:53:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "typeName": {
                "id": 90,
                "keyType": {
                  "id": 88,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "432:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "423:25:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "valueType": {
                  "id": 89,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "443:4:1",
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
                "id": 125,
                "nodeType": "Block",
                "src": "595:200:1",
                "statements": [
                  {
                    "assignments": [
                      103
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 103,
                        "name": "newProperty",
                        "nodeType": "VariableDeclaration",
                        "scope": 126,
                        "src": "605:27:1",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Property_$69_memory_ptr",
                          "typeString": "struct RealEstateMP.Property memory"
                        },
                        "typeName": {
                          "contractScope": null,
                          "id": 102,
                          "name": "Property",
                          "nodeType": "UserDefinedTypeName",
                          "referencedDeclaration": 69,
                          "src": "605:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Property_$69_storage_ptr",
                            "typeString": "struct RealEstateMP.Property storage pointer"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 112,
                    "initialValue": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 105,
                          "name": "_localisation",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 93,
                          "src": "644:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_calldata_ptr",
                            "typeString": "string calldata"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 106,
                          "name": "_area",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 95,
                          "src": "659:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 107,
                          "name": "_description",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 97,
                          "src": "666:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_calldata_ptr",
                            "typeString": "string calldata"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 108,
                          "name": "_chamberCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 99,
                          "src": "680:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 109,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 214,
                            "src": "695:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 110,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "695:10:1",
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
                        "id": 104,
                        "name": "Property",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 69,
                        "src": "635:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_Property_$69_storage_ptr_$",
                          "typeString": "type(struct RealEstateMP.Property storage pointer)"
                        }
                      },
                      "id": 111,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "635:71:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Property_$69_memory",
                        "typeString": "struct RealEstateMP.Property memory"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "605:101:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 116,
                          "name": "newProperty",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 103,
                          "src": "732:11:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Property_$69_memory_ptr",
                            "typeString": "struct RealEstateMP.Property memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_struct$_Property_$69_memory_ptr",
                            "typeString": "struct RealEstateMP.Property memory"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 113,
                          "name": "properties",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 81,
                          "src": "716:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Property_$69_storage_$dyn_storage",
                            "typeString": "struct RealEstateMP.Property storage ref[] storage ref"
                          }
                        },
                        "id": 115,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "push",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "716:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Property_$69_storage_$returns$_t_uint256_$",
                          "typeString": "function (struct RealEstateMP.Property storage ref) returns (uint256)"
                        }
                      },
                      "id": 117,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "716:28:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 118,
                    "nodeType": "ExpressionStatement",
                    "src": "716:28:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 123,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "754:34:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 119,
                          "name": "ownerPropertiesCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 91,
                          "src": "754:20:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 122,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 120,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 214,
                            "src": "775:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 121,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "775:10:1",
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
                        "src": "754:32:1",
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
                    "id": 124,
                    "nodeType": "ExpressionStatement",
                    "src": "754:34:1"
                  }
                ]
              },
              "documentation": null,
              "id": 126,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "createProperty",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 100,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 93,
                    "name": "_localisation",
                    "nodeType": "VariableDeclaration",
                    "scope": 126,
                    "src": "511:20:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_calldata_ptr",
                      "typeString": "string calldata"
                    },
                    "typeName": {
                      "id": 92,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "511:6:1",
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
                    "id": 95,
                    "name": "_area",
                    "nodeType": "VariableDeclaration",
                    "scope": 126,
                    "src": "533:10:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 94,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "533:4:1",
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
                    "id": 97,
                    "name": "_description",
                    "nodeType": "VariableDeclaration",
                    "scope": 126,
                    "src": "545:19:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_calldata_ptr",
                      "typeString": "string calldata"
                    },
                    "typeName": {
                      "id": 96,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "545:6:1",
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
                    "id": 99,
                    "name": "_chamberCount",
                    "nodeType": "VariableDeclaration",
                    "scope": 126,
                    "src": "566:18:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 98,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "566:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "510:75:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 101,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "595:0:1"
              },
              "scope": 201,
              "src": "487:308:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "external"
            },
            {
              "body": {
                "id": 155,
                "nodeType": "Block",
                "src": "896:138:1",
                "statements": [
                  {
                    "assignments": [
                      138
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 138,
                        "name": "newSale",
                        "nodeType": "VariableDeclaration",
                        "scope": 156,
                        "src": "906:19:1",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Sale_$78_memory_ptr",
                          "typeString": "struct RealEstateMP.Sale memory"
                        },
                        "typeName": {
                          "contractScope": null,
                          "id": 137,
                          "name": "Sale",
                          "nodeType": "UserDefinedTypeName",
                          "referencedDeclaration": 78,
                          "src": "906:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Sale_$78_storage_ptr",
                            "typeString": "struct RealEstateMP.Sale storage pointer"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 145,
                    "initialValue": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 140,
                          "name": "_price",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 128,
                          "src": "933:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 141,
                          "name": "_sellerId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 130,
                          "src": "941:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 142,
                          "name": "_saleDate",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 132,
                          "src": "952:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 143,
                          "name": "_propertyId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 134,
                          "src": "963:11:1",
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
                        "id": 139,
                        "name": "Sale",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78,
                        "src": "928:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_Sale_$78_storage_ptr_$",
                          "typeString": "type(struct RealEstateMP.Sale storage pointer)"
                        }
                      },
                      "id": 144,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "928:47:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Sale_$78_memory",
                        "typeString": "struct RealEstateMP.Sale memory"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "906:69:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 149,
                          "name": "newSale",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 138,
                          "src": "996:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Sale_$78_memory_ptr",
                            "typeString": "struct RealEstateMP.Sale memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_struct$_Sale_$78_memory_ptr",
                            "typeString": "struct RealEstateMP.Sale memory"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 146,
                          "name": "sales",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 84,
                          "src": "985:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Sale_$78_storage_$dyn_storage",
                            "typeString": "struct RealEstateMP.Sale storage ref[] storage ref"
                          }
                        },
                        "id": 148,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "push",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "985:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Sale_$78_storage_$returns$_t_uint256_$",
                          "typeString": "function (struct RealEstateMP.Sale storage ref) returns (uint256)"
                        }
                      },
                      "id": 150,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "985:19:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 151,
                    "nodeType": "ExpressionStatement",
                    "src": "985:19:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 153,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "1014:13:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 152,
                        "name": "salesLength",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 87,
                        "src": "1014:11:1",
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
                    "id": 154,
                    "nodeType": "ExpressionStatement",
                    "src": "1014:13:1"
                  }
                ]
              },
              "documentation": null,
              "id": 156,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "createSale",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 135,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 128,
                    "name": "_price",
                    "nodeType": "VariableDeclaration",
                    "scope": 156,
                    "src": "821:11:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 127,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "821:4:1",
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
                    "id": 130,
                    "name": "_sellerId",
                    "nodeType": "VariableDeclaration",
                    "scope": 156,
                    "src": "834:17:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 129,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "834:7:1",
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
                    "id": 132,
                    "name": "_saleDate",
                    "nodeType": "VariableDeclaration",
                    "scope": 156,
                    "src": "853:14:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 131,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "853:4:1",
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
                    "id": 134,
                    "name": "_propertyId",
                    "nodeType": "VariableDeclaration",
                    "scope": 156,
                    "src": "869:16:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 133,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "869:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "820:66:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 136,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "896:0:1"
              },
              "scope": 201,
              "src": "801:233:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "external"
            },
            {
              "body": {
                "id": 199,
                "nodeType": "Block",
                "src": "1084:236:1",
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
                          "id": 170,
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
                                  "id": 163,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 214,
                                  "src": "1107:3:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 164,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "value",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "1107:9:1",
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
                              "id": 162,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1102:4:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": "uint"
                            },
                            "id": 165,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1102:15:1",
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
                                "id": 166,
                                "name": "sales",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 84,
                                "src": "1121:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_struct$_Sale_$78_storage_$dyn_storage",
                                  "typeString": "struct RealEstateMP.Sale storage ref[] storage ref"
                                }
                              },
                              "id": 168,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 167,
                                "name": "_saleId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 158,
                                "src": "1127:7:1",
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
                              "src": "1121:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Sale_$78_storage",
                                "typeString": "struct RealEstateMP.Sale storage ref"
                              }
                            },
                            "id": 169,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "price",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 71,
                            "src": "1121:20:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1102:39:1",
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
                        "id": 161,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 217,
                        "src": "1094:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 171,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1094:48:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 172,
                    "nodeType": "ExpressionStatement",
                    "src": "1094:48:1"
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
                                "id": 179,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 214,
                                "src": "1190:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 180,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "value",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1190:9:1",
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
                            "id": 178,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1185:4:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": "uint"
                          },
                          "id": 181,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1185:15:1",
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
                              "id": 173,
                              "name": "sales",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 84,
                              "src": "1152:5:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_Sale_$78_storage_$dyn_storage",
                                "typeString": "struct RealEstateMP.Sale storage ref[] storage ref"
                              }
                            },
                            "id": 175,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 174,
                              "name": "_saleId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 158,
                              "src": "1158:7:1",
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
                            "src": "1152:14:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Sale_$78_storage",
                              "typeString": "struct RealEstateMP.Sale storage ref"
                            }
                          },
                          "id": 176,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sellerId",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 73,
                          "src": "1152:23:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 177,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transfer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1152:32:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                          "typeString": "function (uint256)"
                        }
                      },
                      "id": 182,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1152:49:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 183,
                    "nodeType": "ExpressionStatement",
                    "src": "1152:49:1"
                  },
                  {
                    "assignments": [
                      185
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 185,
                        "name": "propertySelled",
                        "nodeType": "VariableDeclaration",
                        "scope": 200,
                        "src": "1211:19:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 184,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "1211:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 190,
                    "initialValue": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 186,
                          "name": "sales",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 84,
                          "src": "1233:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Sale_$78_storage_$dyn_storage",
                            "typeString": "struct RealEstateMP.Sale storage ref[] storage ref"
                          }
                        },
                        "id": 188,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 187,
                          "name": "_saleId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 158,
                          "src": "1239:7:1",
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
                        "src": "1233:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Sale_$78_storage",
                          "typeString": "struct RealEstateMP.Sale storage ref"
                        }
                      },
                      "id": 189,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "propertyId",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 77,
                      "src": "1233:25:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1211:47:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 197,
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
                            "id": 191,
                            "name": "properties",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 81,
                            "src": "1268:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Property_$69_storage_$dyn_storage",
                              "typeString": "struct RealEstateMP.Property storage ref[] storage ref"
                            }
                          },
                          "id": 193,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 192,
                            "name": "propertySelled",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 185,
                            "src": "1279:14:1",
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
                          "src": "1268:26:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Property_$69_storage",
                            "typeString": "struct RealEstateMP.Property storage ref"
                          }
                        },
                        "id": 194,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberName": "owner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 68,
                        "src": "1268:32:1",
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
                          "id": 195,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 214,
                          "src": "1303:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 196,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1303:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "1268:45:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 198,
                    "nodeType": "ExpressionStatement",
                    "src": "1268:45:1"
                  }
                ]
              },
              "documentation": null,
              "id": 200,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "buy",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 159,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 158,
                    "name": "_saleId",
                    "nodeType": "VariableDeclaration",
                    "scope": 200,
                    "src": "1053:12:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 157,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1053:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1052:14:1"
              },
              "payable": true,
              "returnParameters": {
                "id": 160,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1084:0:1"
              },
              "scope": 201,
              "src": "1040:280:1",
              "stateMutability": "payable",
              "superFunction": null,
              "visibility": "external"
            }
          ],
          "scope": 202,
          "src": "26:1296:1"
        }
      ],
      "src": "0:1322:1"
    },
    "legacyAST": {
      "attributes": {
        "absolutePath": "project:/contracts/RealEstateMP.sol",
        "exportedSymbols": {
          "RealEstateMP": [
            201
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
          "id": 58,
          "name": "PragmaDirective",
          "src": "0:24:1"
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
              201
            ],
            "name": "RealEstateMP",
            "scope": 202
          },
          "children": [
            {
              "attributes": {
                "canonicalName": "RealEstateMP.Property",
                "name": "Property",
                "scope": 201,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "constant": false,
                    "name": "localisation",
                    "scope": 69,
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
                      "id": 59,
                      "name": "ElementaryTypeName",
                      "src": "81:6:1"
                    }
                  ],
                  "id": 60,
                  "name": "VariableDeclaration",
                  "src": "81:19:1"
                },
                {
                  "attributes": {
                    "constant": false,
                    "name": "area",
                    "scope": 69,
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
                      "id": 61,
                      "name": "ElementaryTypeName",
                      "src": "110:4:1"
                    }
                  ],
                  "id": 62,
                  "name": "VariableDeclaration",
                  "src": "110:9:1"
                },
                {
                  "attributes": {
                    "constant": false,
                    "name": "description",
                    "scope": 69,
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
                      "id": 63,
                      "name": "ElementaryTypeName",
                      "src": "129:6:1"
                    }
                  ],
                  "id": 64,
                  "name": "VariableDeclaration",
                  "src": "129:18:1"
                },
                {
                  "attributes": {
                    "constant": false,
                    "name": "chamberCount",
                    "scope": 69,
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
                      "id": 65,
                      "name": "ElementaryTypeName",
                      "src": "157:4:1"
                    }
                  ],
                  "id": 66,
                  "name": "VariableDeclaration",
                  "src": "157:17:1"
                },
                {
                  "attributes": {
                    "constant": false,
                    "name": "owner",
                    "scope": 69,
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
                      "id": 67,
                      "name": "ElementaryTypeName",
                      "src": "184:7:1"
                    }
                  ],
                  "id": 68,
                  "name": "VariableDeclaration",
                  "src": "184:13:1"
                }
              ],
              "id": 69,
              "name": "StructDefinition",
              "src": "55:149:1"
            },
            {
              "attributes": {
                "canonicalName": "RealEstateMP.Sale",
                "name": "Sale",
                "scope": 201,
                "visibility": "public"
              },
              "children": [
                {
                  "attributes": {
                    "constant": false,
                    "name": "price",
                    "scope": 78,
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
                      "id": 70,
                      "name": "ElementaryTypeName",
                      "src": "232:4:1"
                    }
                  ],
                  "id": 71,
                  "name": "VariableDeclaration",
                  "src": "232:10:1"
                },
                {
                  "attributes": {
                    "constant": false,
                    "name": "sellerId",
                    "scope": 78,
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
                      "id": 72,
                      "name": "ElementaryTypeName",
                      "src": "252:7:1"
                    }
                  ],
                  "id": 73,
                  "name": "VariableDeclaration",
                  "src": "252:16:1"
                },
                {
                  "attributes": {
                    "constant": false,
                    "name": "saleDate",
                    "scope": 78,
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
                      "id": 74,
                      "name": "ElementaryTypeName",
                      "src": "278:4:1"
                    }
                  ],
                  "id": 75,
                  "name": "VariableDeclaration",
                  "src": "278:13:1"
                },
                {
                  "attributes": {
                    "constant": false,
                    "name": "propertyId",
                    "scope": 78,
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
                      "id": 76,
                      "name": "ElementaryTypeName",
                      "src": "301:4:1"
                    }
                  ],
                  "id": 77,
                  "name": "VariableDeclaration",
                  "src": "301:15:1"
                }
              ],
              "id": 78,
              "name": "StructDefinition",
              "src": "210:113:1"
            },
            {
              "attributes": {
                "constant": false,
                "name": "properties",
                "scope": 201,
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
                        "referencedDeclaration": 69,
                        "type": "struct RealEstateMP.Property storage pointer"
                      },
                      "id": 79,
                      "name": "UserDefinedTypeName",
                      "src": "330:8:1"
                    }
                  ],
                  "id": 80,
                  "name": "ArrayTypeName",
                  "src": "330:10:1"
                }
              ],
              "id": 81,
              "name": "VariableDeclaration",
              "src": "330:28:1"
            },
            {
              "attributes": {
                "constant": false,
                "name": "sales",
                "scope": 201,
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
                        "referencedDeclaration": 78,
                        "type": "struct RealEstateMP.Sale storage pointer"
                      },
                      "id": 82,
                      "name": "UserDefinedTypeName",
                      "src": "364:4:1"
                    }
                  ],
                  "id": 83,
                  "name": "ArrayTypeName",
                  "src": "364:6:1"
                }
              ],
              "id": 84,
              "name": "VariableDeclaration",
              "src": "364:19:1"
            },
            {
              "attributes": {
                "constant": false,
                "name": "salesLength",
                "scope": 201,
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
                  "id": 85,
                  "name": "ElementaryTypeName",
                  "src": "389:4:1"
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
                  "id": 86,
                  "name": "Literal",
                  "src": "415:1:1"
                }
              ],
              "id": 87,
              "name": "VariableDeclaration",
              "src": "389:27:1"
            },
            {
              "attributes": {
                "constant": false,
                "name": "ownerPropertiesCount",
                "scope": 201,
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
                      "id": 88,
                      "name": "ElementaryTypeName",
                      "src": "432:7:1"
                    },
                    {
                      "attributes": {
                        "name": "uint",
                        "type": "uint256"
                      },
                      "id": 89,
                      "name": "ElementaryTypeName",
                      "src": "443:4:1"
                    }
                  ],
                  "id": 90,
                  "name": "Mapping",
                  "src": "423:25:1"
                }
              ],
              "id": 91,
              "name": "VariableDeclaration",
              "src": "423:53:1"
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
                "scope": 201,
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
                        "scope": 126,
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
                          "id": 92,
                          "name": "ElementaryTypeName",
                          "src": "511:6:1"
                        }
                      ],
                      "id": 93,
                      "name": "VariableDeclaration",
                      "src": "511:20:1"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "_area",
                        "scope": 126,
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
                          "id": 94,
                          "name": "ElementaryTypeName",
                          "src": "533:4:1"
                        }
                      ],
                      "id": 95,
                      "name": "VariableDeclaration",
                      "src": "533:10:1"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "_description",
                        "scope": 126,
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
                          "id": 96,
                          "name": "ElementaryTypeName",
                          "src": "545:6:1"
                        }
                      ],
                      "id": 97,
                      "name": "VariableDeclaration",
                      "src": "545:19:1"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "_chamberCount",
                        "scope": 126,
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
                          "id": 98,
                          "name": "ElementaryTypeName",
                          "src": "566:4:1"
                        }
                      ],
                      "id": 99,
                      "name": "VariableDeclaration",
                      "src": "566:18:1"
                    }
                  ],
                  "id": 100,
                  "name": "ParameterList",
                  "src": "510:75:1"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 101,
                  "name": "ParameterList",
                  "src": "595:0:1"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "assignments": [
                          103
                        ]
                      },
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "name": "newProperty",
                            "scope": 126,
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
                                "referencedDeclaration": 69,
                                "type": "struct RealEstateMP.Property storage pointer"
                              },
                              "id": 102,
                              "name": "UserDefinedTypeName",
                              "src": "605:8:1"
                            }
                          ],
                          "id": 103,
                          "name": "VariableDeclaration",
                          "src": "605:27:1"
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
                                "referencedDeclaration": 69,
                                "type": "type(struct RealEstateMP.Property storage pointer)",
                                "value": "Property"
                              },
                              "id": 104,
                              "name": "Identifier",
                              "src": "635:8:1"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 93,
                                "type": "string calldata",
                                "value": "_localisation"
                              },
                              "id": 105,
                              "name": "Identifier",
                              "src": "644:13:1"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 95,
                                "type": "uint256",
                                "value": "_area"
                              },
                              "id": 106,
                              "name": "Identifier",
                              "src": "659:5:1"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 97,
                                "type": "string calldata",
                                "value": "_description"
                              },
                              "id": 107,
                              "name": "Identifier",
                              "src": "666:12:1"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 99,
                                "type": "uint256",
                                "value": "_chamberCount"
                              },
                              "id": 108,
                              "name": "Identifier",
                              "src": "680:13:1"
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
                                    "referencedDeclaration": 214,
                                    "type": "msg",
                                    "value": "msg"
                                  },
                                  "id": 109,
                                  "name": "Identifier",
                                  "src": "695:3:1"
                                }
                              ],
                              "id": 110,
                              "name": "MemberAccess",
                              "src": "695:10:1"
                            }
                          ],
                          "id": 111,
                          "name": "FunctionCall",
                          "src": "635:71:1"
                        }
                      ],
                      "id": 112,
                      "name": "VariableDeclarationStatement",
                      "src": "605:101:1"
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
                                    "typeIdentifier": "t_struct$_Property_$69_memory_ptr",
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
                                    "referencedDeclaration": 81,
                                    "type": "struct RealEstateMP.Property storage ref[] storage ref",
                                    "value": "properties"
                                  },
                                  "id": 113,
                                  "name": "Identifier",
                                  "src": "716:10:1"
                                }
                              ],
                              "id": 115,
                              "name": "MemberAccess",
                              "src": "716:15:1"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 103,
                                "type": "struct RealEstateMP.Property memory",
                                "value": "newProperty"
                              },
                              "id": 116,
                              "name": "Identifier",
                              "src": "732:11:1"
                            }
                          ],
                          "id": 117,
                          "name": "FunctionCall",
                          "src": "716:28:1"
                        }
                      ],
                      "id": 118,
                      "name": "ExpressionStatement",
                      "src": "716:28:1"
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
                                    "referencedDeclaration": 91,
                                    "type": "mapping(address => uint256)",
                                    "value": "ownerPropertiesCount"
                                  },
                                  "id": 119,
                                  "name": "Identifier",
                                  "src": "754:20:1"
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
                                        "referencedDeclaration": 214,
                                        "type": "msg",
                                        "value": "msg"
                                      },
                                      "id": 120,
                                      "name": "Identifier",
                                      "src": "775:3:1"
                                    }
                                  ],
                                  "id": 121,
                                  "name": "MemberAccess",
                                  "src": "775:10:1"
                                }
                              ],
                              "id": 122,
                              "name": "IndexAccess",
                              "src": "754:32:1"
                            }
                          ],
                          "id": 123,
                          "name": "UnaryOperation",
                          "src": "754:34:1"
                        }
                      ],
                      "id": 124,
                      "name": "ExpressionStatement",
                      "src": "754:34:1"
                    }
                  ],
                  "id": 125,
                  "name": "Block",
                  "src": "595:200:1"
                }
              ],
              "id": 126,
              "name": "FunctionDefinition",
              "src": "487:308:1"
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
                "scope": 201,
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
                        "scope": 156,
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
                          "id": 127,
                          "name": "ElementaryTypeName",
                          "src": "821:4:1"
                        }
                      ],
                      "id": 128,
                      "name": "VariableDeclaration",
                      "src": "821:11:1"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "_sellerId",
                        "scope": 156,
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
                          "id": 129,
                          "name": "ElementaryTypeName",
                          "src": "834:7:1"
                        }
                      ],
                      "id": 130,
                      "name": "VariableDeclaration",
                      "src": "834:17:1"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "_saleDate",
                        "scope": 156,
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
                          "id": 131,
                          "name": "ElementaryTypeName",
                          "src": "853:4:1"
                        }
                      ],
                      "id": 132,
                      "name": "VariableDeclaration",
                      "src": "853:14:1"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "_propertyId",
                        "scope": 156,
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
                          "id": 133,
                          "name": "ElementaryTypeName",
                          "src": "869:4:1"
                        }
                      ],
                      "id": 134,
                      "name": "VariableDeclaration",
                      "src": "869:16:1"
                    }
                  ],
                  "id": 135,
                  "name": "ParameterList",
                  "src": "820:66:1"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 136,
                  "name": "ParameterList",
                  "src": "896:0:1"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "assignments": [
                          138
                        ]
                      },
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "name": "newSale",
                            "scope": 156,
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
                                "referencedDeclaration": 78,
                                "type": "struct RealEstateMP.Sale storage pointer"
                              },
                              "id": 137,
                              "name": "UserDefinedTypeName",
                              "src": "906:4:1"
                            }
                          ],
                          "id": 138,
                          "name": "VariableDeclaration",
                          "src": "906:19:1"
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
                                "referencedDeclaration": 78,
                                "type": "type(struct RealEstateMP.Sale storage pointer)",
                                "value": "Sale"
                              },
                              "id": 139,
                              "name": "Identifier",
                              "src": "928:4:1"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 128,
                                "type": "uint256",
                                "value": "_price"
                              },
                              "id": 140,
                              "name": "Identifier",
                              "src": "933:6:1"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 130,
                                "type": "address",
                                "value": "_sellerId"
                              },
                              "id": 141,
                              "name": "Identifier",
                              "src": "941:9:1"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 132,
                                "type": "uint256",
                                "value": "_saleDate"
                              },
                              "id": 142,
                              "name": "Identifier",
                              "src": "952:9:1"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 134,
                                "type": "uint256",
                                "value": "_propertyId"
                              },
                              "id": 143,
                              "name": "Identifier",
                              "src": "963:11:1"
                            }
                          ],
                          "id": 144,
                          "name": "FunctionCall",
                          "src": "928:47:1"
                        }
                      ],
                      "id": 145,
                      "name": "VariableDeclarationStatement",
                      "src": "906:69:1"
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
                                    "typeIdentifier": "t_struct$_Sale_$78_memory_ptr",
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
                                    "referencedDeclaration": 84,
                                    "type": "struct RealEstateMP.Sale storage ref[] storage ref",
                                    "value": "sales"
                                  },
                                  "id": 146,
                                  "name": "Identifier",
                                  "src": "985:5:1"
                                }
                              ],
                              "id": 148,
                              "name": "MemberAccess",
                              "src": "985:10:1"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 138,
                                "type": "struct RealEstateMP.Sale memory",
                                "value": "newSale"
                              },
                              "id": 149,
                              "name": "Identifier",
                              "src": "996:7:1"
                            }
                          ],
                          "id": 150,
                          "name": "FunctionCall",
                          "src": "985:19:1"
                        }
                      ],
                      "id": 151,
                      "name": "ExpressionStatement",
                      "src": "985:19:1"
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
                                "referencedDeclaration": 87,
                                "type": "uint256",
                                "value": "salesLength"
                              },
                              "id": 152,
                              "name": "Identifier",
                              "src": "1014:11:1"
                            }
                          ],
                          "id": 153,
                          "name": "UnaryOperation",
                          "src": "1014:13:1"
                        }
                      ],
                      "id": 154,
                      "name": "ExpressionStatement",
                      "src": "1014:13:1"
                    }
                  ],
                  "id": 155,
                  "name": "Block",
                  "src": "896:138:1"
                }
              ],
              "id": 156,
              "name": "FunctionDefinition",
              "src": "801:233:1"
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
                "scope": 201,
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
                        "scope": 200,
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
                          "id": 157,
                          "name": "ElementaryTypeName",
                          "src": "1053:4:1"
                        }
                      ],
                      "id": 158,
                      "name": "VariableDeclaration",
                      "src": "1053:12:1"
                    }
                  ],
                  "id": 159,
                  "name": "ParameterList",
                  "src": "1052:14:1"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 160,
                  "name": "ParameterList",
                  "src": "1084:0:1"
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
                                "referencedDeclaration": 217,
                                "type": "function (bool) pure",
                                "value": "require"
                              },
                              "id": 161,
                              "name": "Identifier",
                              "src": "1094:7:1"
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
                                      "id": 162,
                                      "name": "ElementaryTypeNameExpression",
                                      "src": "1102:4:1"
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
                                            "referencedDeclaration": 214,
                                            "type": "msg",
                                            "value": "msg"
                                          },
                                          "id": 163,
                                          "name": "Identifier",
                                          "src": "1107:3:1"
                                        }
                                      ],
                                      "id": 164,
                                      "name": "MemberAccess",
                                      "src": "1107:9:1"
                                    }
                                  ],
                                  "id": 165,
                                  "name": "FunctionCall",
                                  "src": "1102:15:1"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "price",
                                    "referencedDeclaration": 71,
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
                                            "referencedDeclaration": 84,
                                            "type": "struct RealEstateMP.Sale storage ref[] storage ref",
                                            "value": "sales"
                                          },
                                          "id": 166,
                                          "name": "Identifier",
                                          "src": "1121:5:1"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 158,
                                            "type": "uint256",
                                            "value": "_saleId"
                                          },
                                          "id": 167,
                                          "name": "Identifier",
                                          "src": "1127:7:1"
                                        }
                                      ],
                                      "id": 168,
                                      "name": "IndexAccess",
                                      "src": "1121:14:1"
                                    }
                                  ],
                                  "id": 169,
                                  "name": "MemberAccess",
                                  "src": "1121:20:1"
                                }
                              ],
                              "id": 170,
                              "name": "BinaryOperation",
                              "src": "1102:39:1"
                            }
                          ],
                          "id": 171,
                          "name": "FunctionCall",
                          "src": "1094:48:1"
                        }
                      ],
                      "id": 172,
                      "name": "ExpressionStatement",
                      "src": "1094:48:1"
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
                                    "referencedDeclaration": 73,
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
                                            "referencedDeclaration": 84,
                                            "type": "struct RealEstateMP.Sale storage ref[] storage ref",
                                            "value": "sales"
                                          },
                                          "id": 173,
                                          "name": "Identifier",
                                          "src": "1152:5:1"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 158,
                                            "type": "uint256",
                                            "value": "_saleId"
                                          },
                                          "id": 174,
                                          "name": "Identifier",
                                          "src": "1158:7:1"
                                        }
                                      ],
                                      "id": 175,
                                      "name": "IndexAccess",
                                      "src": "1152:14:1"
                                    }
                                  ],
                                  "id": 176,
                                  "name": "MemberAccess",
                                  "src": "1152:23:1"
                                }
                              ],
                              "id": 177,
                              "name": "MemberAccess",
                              "src": "1152:32:1"
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
                                  "id": 178,
                                  "name": "ElementaryTypeNameExpression",
                                  "src": "1185:4:1"
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
                                        "referencedDeclaration": 214,
                                        "type": "msg",
                                        "value": "msg"
                                      },
                                      "id": 179,
                                      "name": "Identifier",
                                      "src": "1190:3:1"
                                    }
                                  ],
                                  "id": 180,
                                  "name": "MemberAccess",
                                  "src": "1190:9:1"
                                }
                              ],
                              "id": 181,
                              "name": "FunctionCall",
                              "src": "1185:15:1"
                            }
                          ],
                          "id": 182,
                          "name": "FunctionCall",
                          "src": "1152:49:1"
                        }
                      ],
                      "id": 183,
                      "name": "ExpressionStatement",
                      "src": "1152:49:1"
                    },
                    {
                      "attributes": {
                        "assignments": [
                          185
                        ]
                      },
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "name": "propertySelled",
                            "scope": 200,
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
                              "id": 184,
                              "name": "ElementaryTypeName",
                              "src": "1211:4:1"
                            }
                          ],
                          "id": 185,
                          "name": "VariableDeclaration",
                          "src": "1211:19:1"
                        },
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "member_name": "propertyId",
                            "referencedDeclaration": 77,
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
                                    "referencedDeclaration": 84,
                                    "type": "struct RealEstateMP.Sale storage ref[] storage ref",
                                    "value": "sales"
                                  },
                                  "id": 186,
                                  "name": "Identifier",
                                  "src": "1233:5:1"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 158,
                                    "type": "uint256",
                                    "value": "_saleId"
                                  },
                                  "id": 187,
                                  "name": "Identifier",
                                  "src": "1239:7:1"
                                }
                              ],
                              "id": 188,
                              "name": "IndexAccess",
                              "src": "1233:14:1"
                            }
                          ],
                          "id": 189,
                          "name": "MemberAccess",
                          "src": "1233:25:1"
                        }
                      ],
                      "id": 190,
                      "name": "VariableDeclarationStatement",
                      "src": "1211:47:1"
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
                                "referencedDeclaration": 68,
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
                                        "referencedDeclaration": 81,
                                        "type": "struct RealEstateMP.Property storage ref[] storage ref",
                                        "value": "properties"
                                      },
                                      "id": 191,
                                      "name": "Identifier",
                                      "src": "1268:10:1"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 185,
                                        "type": "uint256",
                                        "value": "propertySelled"
                                      },
                                      "id": 192,
                                      "name": "Identifier",
                                      "src": "1279:14:1"
                                    }
                                  ],
                                  "id": 193,
                                  "name": "IndexAccess",
                                  "src": "1268:26:1"
                                }
                              ],
                              "id": 194,
                              "name": "MemberAccess",
                              "src": "1268:32:1"
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
                                    "referencedDeclaration": 214,
                                    "type": "msg",
                                    "value": "msg"
                                  },
                                  "id": 195,
                                  "name": "Identifier",
                                  "src": "1303:3:1"
                                }
                              ],
                              "id": 196,
                              "name": "MemberAccess",
                              "src": "1303:10:1"
                            }
                          ],
                          "id": 197,
                          "name": "Assignment",
                          "src": "1268:45:1"
                        }
                      ],
                      "id": 198,
                      "name": "ExpressionStatement",
                      "src": "1268:45:1"
                    }
                  ],
                  "id": 199,
                  "name": "Block",
                  "src": "1084:236:1"
                }
              ],
              "id": 200,
              "name": "FunctionDefinition",
              "src": "1040:280:1"
            }
          ],
          "id": 201,
          "name": "ContractDefinition",
          "src": "26:1296:1"
        }
      ],
      "id": 202,
      "name": "SourceUnit",
      "src": "0:1322:1"
    },
    "compiler": {
      "name": "solc",
      "version": "0.4.21+commit.dfe3193c.Emscripten.clang"
    },
    "networks": {},
    "schemaVersion": "3.4.7",
    "updatedAt": "2022-04-15T10:19:19.926Z",
    "devdoc": {
      "methods": {}
    },
    "userdoc": {
      "methods": {}
    }
};