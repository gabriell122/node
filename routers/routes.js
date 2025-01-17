const express = require('express');
const router = express.Router();

const UsuariosController= require("../controllers/UsuariosController");
const EnderecosController= require("../controllers/EnderecosController");
const VeiculosController= require("../controllers/VeiculosController");
const FretesController= require("../controllers/FretesController");
const EntregadoresController= require("../controllers/EntregadoresController");
const PedidosController= require("../controllers/PedidosController");

router.get('/Usuarios',UsuariosController.listarUsuarios);
router.get('/Usuarios/:id',UsuariosController.listarUsuariosId);
router.post('/Usuarios',UsuariosController.inserirUsuarios);
router.patch('/Usuarios',UsuariosController.alterarUsuarios);
router.delete('/Usuarios',UsuariosController.deletarUsuarios);

router.get('/Enderecos',EnderecosController.listarEnderecos);
router.get('/Enderecos/:id',EnderecosController.listarEnderecosId);
router.post('/Enderecos',EnderecosController.inserirEnderecos);
router.patch('/Enderecos',EnderecosController.alterarEnderecos);
router.delete('/Enderecos',EnderecosController.deletarEnderecos);

router.get('/Veiculos',VeiculosController.listarVeiculos);
router.get('/Veiculos/:id',VeiculosController.listarVeiculosId);
router.post('/Veiculos',VeiculosController.inserirVeiculos);
router.patch('/Veiculos',VeiculosController.alterarVeiculos);
router.delete('/Veiculos',VeiculosController.deletarVeiculos);


router.get('/Fretes',FretesController.listarFretes);
router.get('/Fretes/:id',FretesController.listarFretesId);
router.post('/Fretes',FretesController.inserirFretes);
router.patch('/Fretes',FretesController.alterarFretes);
router.delete('/Fretes',FretesController.deletarFretes);


router.get('/Entregadores',EntregadoresController.listarEntregadores);
router.get('/Entregadores/:id',EntregadoresController.listarEntregadoresId);
router.post('/Entregadores',EntregadoresController.inserirEntregadores);
router.patch('/Entregadores',EntregadoresController.alterarEntregadores);
router.delete('/Entregadores',EntregadoresController.deletarEntregadores);

router.get('/Pedidos',PedidosController.listarPedidos);
router.get('/Pedidos/:id',PedidosController.listarPedidosId);
router.post('/Pedidos',PedidosController.inserirPedidos);
router.patch('/Pedidos',PedidosController.alterarPedidos);
router.delete('/Pedidos',PedidosController.deletarPedidos);

module.exports = router;