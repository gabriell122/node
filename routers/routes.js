const db = require("../database/connection");
const express = require('express');
const router = express.Router();

const UsuariosController= require("../controllers/UsuariosController");
const EnderecosController= require("../controllers/EnderecosController");
const VeiculosController= require("../controllers/VeiculosController");
const FretesController= require("../controllers/FretesController");
const EntregadoresController= require("../controllers/EntregadoresController");
const PedidosController= require("../controllers/PedidosController");

router.get('./Usuarios',UsuariosController.listarUsuarios);
router.get('./Enderecos',EnderecosController.listarEnderecos);
router.get('./Veiculos',VeiculosController.listarVeiculos);
router.get('./Fretes',FretesController.listarFretes);
router.get('./Entregadores',EntregadoresController.listarEntregadores);
router.get('./Pedidos',PedidosController.listarPedidos);