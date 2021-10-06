function solution(worker) {
    if(worker.dizziness){
        worker.dizziness = false;
        worker.levelOfHydrated += worker.experience * worker.weight * 0.1;
    }
    return worker;
}

solution({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  )