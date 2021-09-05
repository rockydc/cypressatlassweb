pipeline{
    // untuk define dimana mau dirun
    agent{
        node{
            label 'docker-chrome'
        }
    }
    // kumpulan task yang akan kita assign di job tersebut
    // task: run automation test
    // 1.clone source code (otomatis di jenkins,jadi diskip)
    // 2.masuk kedalam project
    // 3.npm install (install dependency)
    // 4. run test 
    // 5. generate report

    stages:{
        stage('Install dependencies'){
            steps{
                // semua task operation bisa ditulis disini
                sh "npm ci"
            }
        }
        stage('run test'){
            steps{
                sh "npm test"
            }
        }
        stage('generate report'){
            steps{
               sh "npm run reporter"
               sh "ls cypress/reports"
            //    publish html pipeline

            
            }
        }

    }
    // yang akan di execute setelah semua stages
    // ada pilihan always,failed(ketika failed aja),success (ketika success aja)
    post{
        always{
            echo " ini adalah post()"
        }
    }
}