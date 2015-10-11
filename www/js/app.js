// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])
.controller('TodoCtrl', function TodoCtrl($ionicModal, $scope) {
  // For the modal
  $scope.ctrl = this;

  var vm = this,
      taskModal,
      tasks = [
        {
          item: "Attend mass",
        },
        {
          item: "Pick up groceries",
        },
        {
          item: "Get a haircut",
        },
      ];

  vm.createTask = createTask;
  vm.closeNewTask = closeNewTask;
  vm.newTask = newTask;
  vm.tasks = tasks;

  $ionicModal.fromTemplateUrl('new-task.html', function(modal) {
    taskModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });


  function newTask() {
    taskModal.show();
  }

  function closeNewTask() {
    taskModal.hide();
  }

  function createTask(task) {
    vm.tasks.push(task);
    taskModal.hide();
  }
})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
