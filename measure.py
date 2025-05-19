def measure_all(func, args):
    tracemalloc.start()
    start_time = time.perf_counter()

    result = func(args) 

    end_time = time.perf_counter()
    current, peak = tracemalloc.get_traced_memory()
    tracemalloc.stop()

    elapsed_time = end_time - start_time
    result_data = {
        "実行時間　　　　": f"{elapsed_time:.6f} 秒",
        "メモリ（現時点）": f"{current} bytes",
        "メモリ（ピーク）": f"{peak} bytes",
        "実行結果　　　　": f"{result}"
    }

    json_str = json.dumps(result_data, ensure_ascii=False)
    return json_str

def measure(name):  
    return measure_all(main, name)
