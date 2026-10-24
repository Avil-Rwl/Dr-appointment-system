pipeline {
agent {
label 'mern-agent'
}


stages {
    stage('Checkout Verification') {
        steps {
            echo 'GitHub webhook is working!'
            echo'Congress u have done it!'
            sh 'hostname'
            sh 'whoami'
            sh 'git --version'
        }
    }
}

post {
    success {
        echo 'Pipeline completed successfully!'
    }
    failure {
        echo 'Pipeline failed. Check the console output.'
    }
}


}

