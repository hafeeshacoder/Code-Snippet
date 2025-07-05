var app = angular.module('snippetApp', []);

app.controller('SnippetController', function($scope) {
  $scope.snippets = [
    {
      title: "HTML Boilerplate",
      category: "HTML",
      code: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n</body>\n</html>"
    },
    {
      title: "Center Content with Flexbox",
      category: "CSS",
      code: "display: flex;\njustify-content: center;\nalign-items: center;\nheight: 100vh;"
    },
    {
      title: "JS Alert Button",
      category: "JavaScript",
      code: "document.getElementById('btn').onclick = function() {\n  alert('Button Clicked!');\n};"
    }
  ];

  $scope.newSnippet = {};
  $scope.filterCategory = '';
  $scope.searchText = '';
  $scope.isDark = false;

  $scope.addSnippet = function() {
    if ($scope.newSnippet.title && $scope.newSnippet.category && $scope.newSnippet.code) {
      $scope.snippets.push(angular.copy($scope.newSnippet));
      $scope.newSnippet = {}; // Clear form
    }
  };

  $scope.copyCode = function(code) {
    const textarea = document.createElement('textarea');
    textarea.value = code;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert("✅ Code copied to clipboard!");
  };

  $scope.toggleTheme = function() {
    $scope.isDark = !$scope.isDark;
  };
});
