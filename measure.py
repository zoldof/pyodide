def measure_all(func, args):
    tracemalloc.start()
    start_time = time.perf_counter()

    result = func(args) 

    end_time = time.perf_counter()
    current, peak = tracemalloc.get_traced_memory()
    tracemalloc.stop()

    elapsed_time = end_time - start_time
    result_data = {
        "実行時間　　　　": elapsed_time,
        "メモリ（現時点）": current,
        "メモリ（ピーク）": peak,
    }

    result_data["実行結果　　　　"] = result

    return result_data

def format_result(result_data):
    lines = []
    for key, value in result_data.items():
        if isinstance(value, float):
            lines.append(f"{key}: {value:.6f} 秒")
        elif isinstance(value, list):
            lines.append(f"{key}: {value}")
        elif key=="メモリ（現時点）" or key=="メモリ（ピーク）":
            lines.append(f"{key}: {value} bytes")
        else:
            lines.append(f"{key}: {value}")
    return "\n".join(lines)

def main(name):  
    result_data = measure_all(greet, name)
    return format_result(result_data)
